const serve = require('koa-static');
const Koa = require('koa');
const app = new Koa();

app.use(serve('dist'));
app.use(async ctx => {
  if(ctx.path === 'sub-path') {
    ctx.body = 'SPA navigation'
  }
  ctx.body = 'Hello World';
});

app.listen(3000, () => {
    console.log('starting the web server on port 3000');
    console.log('open http://localhost:3000');
});