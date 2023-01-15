import { Router } from 'express'
import * as transacCtrl from '../controllers/transactions.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.get('/', transacCtrl.index)
router.get('/new', transacCtrl.new)
router.get('/:id', transacCtrl.show)
// router.get('/:id/edit', isLoggedIn, tacosCtrl.edit)
router.post('/', isLoggedIn, transacCtrl.create)
router.put('/:id', isLoggedIn, transacCtrl.update)
// router.delete('/:id', isLoggedIn, tacosCtrl.delete)

export {
  router
}