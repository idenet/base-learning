const Koa = require('koa')
const app = new Koa()

let returnData = {
  success: true,
  data: {
    text: 'this is a jsonp api',
    time: new Date().getTime()
  }
}

app.use(async (ctx, next) => {
  console.log(new Date())
  next()
})
app.use(async ctx => {
  let map = urlToObj(ctx.querystring)
  if (ctx.method === 'GET' && map.get('format') === 'jsonp') {
    // 用text/javascript，让请求支持跨域获取
    ctx.type = 'text/javascript'
    // 输出jsonp字符串
    ctx.body = `${map.get('callback')}(${JSON.stringify(returnData)})`
  } else {
    ctx.body = 'hello'
  }
})

function urlToObj(url) {
  let map = new Map()
  url.split('&').forEach(value => {
    let array = value.split('=')
    map.set(array[0], array[1])
  })
  return map
}

app.listen(3002)
