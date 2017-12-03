import Router from 'koa-router'
import cositas from './cositas.js'

const router = new Router();
router.use('/api/cositas', cositas.routes());

export default router