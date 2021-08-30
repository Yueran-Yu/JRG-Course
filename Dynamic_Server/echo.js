// the request method is POST
// the URL is /echo


const http = require('http')
http.createServer((request, response) => {
  if (request.method === 'POST' && request.url === '/echo') {
    let body = []
    request.on('data', (chunk) => {
      body.push(chunk)
    }).on('end', () => {
      body = Buffer.concat(body).toString()
      response.end(body)
    })
  } else {
    response.statusCode = 404
    response.end('Done')
  }
}).listen(8080)
/**
 * Remember:
 * The request object is a ReadableStream and the response object is a Writeable Stream
 * That means we can use pipe to direct data from one to the other.
 * That's exactly what we want for an echo server~!
 */

const http = require('http')
http.createServer((request, response) => {

  request.on('error', (err) => {
    console.error((err));
    response.statusCode = 400
    response.end()
  })

  response.on('error', (err) => {
    console.error(err);
  })

  if (request.method === 'POST' && request.url === '/echo') {
    request.pipe(response)
  } else {
    response.statusCode = 404
    response.end()
  }
}).listen(8080)