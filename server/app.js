const koa = require('koa');
const Router = require('koa-router');
const app = new koa();
const router = new Router();

router.get('/', ctx => {
  ctx.body = '成功'
})

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(8080, () => {
  console.log('server port is 8080')
})