import Router from 'koa-router'
import passport from './index.js'

const authRouter = new Router()

authRouter
  .post('/login', function (ctx, next) {
    return passport.authenticate('local', function(err, user, info, status) {
      if (user === false) {
        ctx.body = { success: false }
        ctx.throw(401)
      } else {
        ctx.body = { success: true }
        return ctx.login(user)
      }
    })(ctx, next)
  })
  .get('/', function (ctx) {
    ctx.body = 'Home'
  })

export default authRouter
