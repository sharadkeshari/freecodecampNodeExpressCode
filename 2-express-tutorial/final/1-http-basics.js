const http = require('http')

const server = http.createServer((req, res) => {
  console.log("useer hit the server");
  // console.log(req.method)
  const url = req.url
  // home page
  if (url === '/') {
    //mime-type thing
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write('<h1>home page</h1>')
    //below one must be called on all the requests.
    res.end()
  }
  // about page
  else if (url === '/about') {
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write('<h1>about page</h1>')
    res.end()
  }
  // 404
  else {
    res.writeHead(404, { 'content-type': 'text/html' })
    res.write('<h1>page not found</h1>')
    res.end()
  }
})

server.listen(5000)
