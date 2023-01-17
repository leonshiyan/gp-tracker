import { Router } from 'express'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()
// GET profiles
router.get('/', isLoggedIn, )


export {
  router
}