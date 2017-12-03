import passport from 'koa-passport'
import { Strategy as LocalStrategy } from 'passport-local'

const fetchUser = (() => {
  const user = { id: 1, username: 'seba', password: 'lube' }
  return async function() {
    return user
  }
})()

passport.serializeUser(function(user, done) {
  done(null, user.id)
})

passport.deserializeUser(async function(id, done) {
  try {
    const user = await fetchUser()
    done(null, user)
  } catch(err) {
    done(err)
  }
})

passport.use(new LocalStrategy(function(username, password, done) {
  fetchUser()
    .then(user => {
      done(null, user)
    //   if (username === user.username && password === user.password) {
    //     done(null, user)
    //   } else {
    //     done(null, false)
    //   }
    })
    .catch(err => done(err))
}))

export default passport
