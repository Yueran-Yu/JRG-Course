var http = require("http");
var fs = require("fs");
var url = require("url");
var port = process.argv[2];

if (!port) {
  console.log("请指定端口号好不啦？\nnode server.js 8888 这样不会吗？");
  process.exit(1);
}

var server = http.createServer(function (request, response) {
  var parsedUrl = url.parse(request.url, true);
  var pathWithQuery = request.url;
  var queryString = "";
  if (pathWithQuery.indexOf("?") >= 0) {
    queryString = pathWithQuery.substring(pathWithQuery.indexOf("?"));
  }
  var path = parsedUrl.pathname;
  var query = parsedUrl.query;
  var method = request.method;

  /******** 从这里开始看，上面不要看 ************/
  const session = JSON.parse(fs.readFileSync('./session.json').toString())

  console.log("有个傻子发请求过来啦！路径（带查询参数）为：" + pathWithQuery);

  if (path === "/home.html") {
    response.setHeader("Content-Type", "text/html; charset=UTF-8");
    const cookie = request.headers["cookie"];
    // here cookie is a string
    let sessionId
    try {
      sessionId = cookie
        .split(";")
        .filter((s) => s.indexOf("session_id=") >= 0)[0]
        .split("=")[1];
    } catch (error) {
      console.log(error);
    }

    if (sessionId && session[sessionId]) {
      response.statusCode = 200;
      const homeHtml = fs.readFileSync("./public/home.html").toString();
      const userId = session[sessionId].user_id
      // console.log("=============");
      // console.log( typeof userId);
      const userArray = JSON.parse(fs.readFileSync("./db/users.json"));
      const user = userArray.find((user) => user.id === userId);
      let string;

      if (user) {
        string = homeHtml.replace("Hello, {{user}}", `Hello, ${user.name}`);
      } else {
        string = homeHtml.replace("Hello, {{user}}", "Please Log In");
      }
      response.write(string);
      response.end();
    } else {
      response.statusCode = 200;
      const homeHtml = fs.readFileSync("./public/home.html").toString();
      const string = homeHtml.replace("Hello, {{user}}", "Please Log In");
      response.write(string);
      response.end();
    }
  } else if (path === "/signIn" && method === "POST") {
    response.setHeader("Content-Type", "text/html; charset=UTF-8");
    const dbUserArray = JSON.parse(fs.readFileSync("./db/users.json"));
    const array = [];
    // get data from the webpage form
    request.on("data", (chunk) => {
      array.push(chunk);
    });

    // process the data from the webpage
    request.on("end", () => {
      // Buffer: change a machine language to a human read language
      // <Buffer 7b 22 6e 61 6d 65 22 3a 22 72 74 79 75 77 65 72 22 2c 22 70 61 73 73 77 6f 72 64 22 3a 22 31 31 31 31 31 22 7d>    equal to    {"name":"trouper","password":"121212"}

      // webpage entered data
      const string = Buffer.concat(array).toString();
      const obj = JSON.parse(string);
      const user = dbUserArray.find(
        (userData) =>
          userData.name === obj.name && userData.password === obj.password
      );
      if (user === undefined) {
        response.statusCode = 400;
        response.setHeader("Content-Type", "text/json; charset=utf-8");
        response.end(`{"errorCode" : 4001}`);
      } else {
        response.statusCode = 200;
        const random = Math.random();
        const session = JSON.parse(
          fs.readFileSync("./session.json").toString()
        );
        session[random] = { user_id: user.id };
        fs.writeFileSync("./session.json", JSON.stringify(session));
        response.setHeader("Set-Cookie", `session_id=${random}; HttpOnly`);
        response.end();
      }
    });
  } else if (path === "/register" && method === "POST") {
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    const userArray = JSON.parse(fs.readFileSync("./db/users.json"));
    const array = [];
    //request upload event
    request.on("data", (chunk) => {
      array.push(chunk);
    });

    request.on("end", () => {
      const string = Buffer.concat(array).toString();
      const obj = JSON.parse(string);
      const lastUser = userArray[userArray.length - 1];
      const newUser = {
        // the last person's id
        id: lastUser ? lastUser.id + 1 : 1,
        name: obj.name,
        password: obj.password,
      };
      userArray.push(newUser);
      fs.writeFileSync("./db/users.json", JSON.stringify(userArray));

      response.end("Register Done");
    });
  } else {
    response.statusCode = 200;
    // default first page
    const filePath = path === "/" ? "/index.html" : path;
    // get the last index of dot .
    const dotIndex = filePath.lastIndexOf(".");
    const postFix = filePath.substring(dotIndex);
    console.log("=================");
    console.log(dotIndex);
    const fileTypes = {
      ".html": "text/html",
      ".css": "text/css",
      ".js": "text/javascript",
      ".png": "image/png",
      ".jpg": "image/jpeg",
      ".jpeg": "image/jpeg",
    };
    response.setHeader(
      "Content-Type",
      `${fileTypes[postFix] || "text/html"};charset=utf-8`
    );
    let content;
    try {
      content = fs.readFileSync(`./public${filePath}`);
    } catch (error) {
      content = "Sorry the file is not exist.";
      response.statusCode = 404;
    }
    response.write(content);
    response.end();
  }
  /******** 代码结束，下面不要看 ************/
});

server.listen(port);
console.log(
  "监听 " +
  port +
  " 成功\n请用在空中转体720度然后用电饭煲打开 http://localhost:" +
  port
);
