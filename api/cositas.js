import Router from 'koa-router'
import Models from '../models'

const router = new Router();

router.get('/create', function(ctx, next) {
  return Models.Cosita.create({
    nombre: ctx.query.nombre
  }).then(function({dataValues}) {
    ctx.body = dataValues
  });
})
.get('/get', function(ctx, next) {
  return Models.Cosita.findAll().then(cositas => ctx.body = cositas)
});


export default router