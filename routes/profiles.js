import { Router } from 'express'
import { isLoggedIn } from '../middleware/middleware.js'
import * as profilesCtrl from '../controllers/profiles.js'

const router = Router()
// GET profiles
router.get('/', isLoggedIn, profilesCtrl.index)
router.post('/:id/milage', isLoggedIn, profilesCtrl.addMilage)

export {
  router
}