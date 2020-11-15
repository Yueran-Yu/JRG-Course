const http = require('http')

/* Any node web server application will at some point have to create a web server object. This is done by using createServer
 The function that's passed in to createServer is called once for every HTTP request that's made against that server, so it's called the request handler.

 In fact, the Server object returned by createServer is an EventEmitter, and what we have here is just shorthand for creating a server object and then adding the listener later.
 */

const server = http.createServer((request, response) => {
  //magic happens here
  const { headers, method, url } = request
  let body = []
  request.on('error', (err) => {
    // this prints the error message and stack trace to 'stderr'
    console.error(err.stack);
  })

  request.on('data', (chunk) => {
    body.push(chunk)
  })

  request.on('end', () => {
    body = Buffer.concat(body).toString()
    /**
     * At this point, `body` has the entire request body stored in it as a string
     * We have the headers, method, url and body, and can now do whatever we need to in order to respond to this request
     **/

     response.on('error', (err) => {
       console.error(err);
     })

     response.statusCode = 200
     response.setHeader('Content-Type', 'application/json')
     // Note: the 2 lines above could be replaced with this next one:
     // response.writeHead(200, {'Content-Type': 'application/json'})

     const responseBody = {headers, method, url, body}
     response.write(JSON.stringify(responseBody))
     response.end()
     // Note: the 2 lines above could be replaced with this next one:
     // response.end(JSON.stringify(responseBody))
  })
}).listen(8080)  // Actives this server, listening on port 8080




// An other way to create a server object
// const server1 = http.createServer()
// server1.on('request', (request, response) => {
//   // the same kind of magic happens here!
// })

/**
 * When handling a request, the first thing you'll probably want to do is look at the method and URL.
 * so that appropriate actions can be taken. Node.js makes this relatively painless by putting handy properties onto the request object.
 * The method here will always be a normal HTTP method/verb. The url is the full URL without the server, protocol or port. For a typical URL, this means everything after and including the third forward slash.
 */


 /**
  * It is important to set the status and headers before you start writing chunks of data to the body
  * This makes sense, since headers come before the body in HTTP responses.
  */