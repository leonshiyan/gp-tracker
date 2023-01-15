import { Station } from "../models/station.js"

function newStation(req, res) {
  Station.find({})
  .then(stations => {
    res.render('stations/new', {
      title: 'Add Station',
      stations
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/transactions')
  })
}

function create(req, res) {
  Station.create(req.body)
  .then(station => {
    res.redirect('/stations/new')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/transactions')
  })
}

export {
  newStation as new,
  create
}