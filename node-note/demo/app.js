const http = require('http')
const querystring = require('querystring')

// 监听服务器的request事件
http.createServer(function(req, res){
  var postData = '';
  req.setEncoding('utf8');
  // 监听请求的data事件
  req.on('data', function(chunk){
    postData += chunk;
  })
  // 监听end事件
  req.on('end',function(){
    res.end(postData)
  })
}).listen(8080)

console.log('服务器启动完成')