import Koa from 'koa'
import session from 'koa-generic-session'
import mysqlStore from 'koa-mysql-session'
import bodyParser from 'koa-bodyparser'
import logger from 'koa-logger'

import passport from './auth'
import authRouter from './auth/authRouter.js'

import api from './api'

import config from './config/config.json';
const env = process.env.NODE_ENV || 'development';

let app = new Koa()

app.use(bodyParser())
app.use(logger())

app.keys = ['your-session-secret']
app.use(session({
        store: new mysqlStore(config['database'][env]),
        ...config['session']
}))

app.use(passport.initialize())
app.use(passport.session())

app.use(authRouter.routes())

app.use(api.routes());
app.use(function(ctx, next) {
  if (ctx.isAuthenticated()) {
    return next()
  } else {
    ctx.redirect('/')
  }
})
app.listen(3000);
