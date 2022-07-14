/*
 * @Author: nongqi
 */

const http = require('http')
const port = 8000;

let list = []
let num = 0

// create 100,000 records
for (let i = 0; i < 100_000; i++) {
  num++
  list.push({
    src: 'https://miro.medium.com/fit/c/64/64/1*XYGoKrb1w5zdWZLOIEevZg.png',
    text: `hello world ${num}`,
    tid: num
  })
}

http.createServer(function (req, res) {
  // for Cross-Origin Resource Sharing (CORS)
  res.writeHead(200, {
    'Access-Control-Allow-Origin': '*',
    "Access-Control-Allow-Methods": "DELETE,PUT,POST,GET,OPTIONS",
    'Access-Control-Allow-Headers': 'Content-Type'
  })

  res.end(JSON.stringify(list));
}).listen(port, function () {
  console.log('server is listening on port ' + port);
})