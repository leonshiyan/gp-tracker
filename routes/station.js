import { Router } from 'express'
import * as stationsCtrl from '../controllers/stations.js'

const router = Router()

// GET /performers/new
router.get('/new', stationsCtrl.new)

// POST /performers
router.post('/', stationsCtrl.create)

export {
  router
}
