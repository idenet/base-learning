const Koa = require('koa')
const fs = require('fs')
const app = new Koa()

// app.use(require('koa-static')(__dirname + '/public/index.html'))

app.use(async ctx => {
  ctx.type = 'html'
  ctx.body = fs.createReadStream('./public/index.html')
})

app.listen(3001)
