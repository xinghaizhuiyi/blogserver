const koa = require('koa')
const router = require('./server/routes/path')
var cors = require('koa2-cors');

const app=new koa()

app.use(cors());
app.use(router.routes())

app.listen(3000,() => {
    console.log('Koa is listening in 3000');
  });
  