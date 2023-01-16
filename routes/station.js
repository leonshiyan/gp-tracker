import { Router } from 'express'
import * as stationsCtrl from '../controllers/stations.js'

const router = Router()

// GET /stations/new
router.get('/new', stationsCtrl.new)

// POST /stations
router.post('/', stationsCtrl.create)
// POST /stations/:id/reviews
router.post('/:id/reviews', stationsCtrl.createReview)

export {
  router
}
