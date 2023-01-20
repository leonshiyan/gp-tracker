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
    res.redirect('/stations/new')
  })
}

function create(req, res) {
  Station.create(req.body)
  .then(station => {
    res.redirect('/stations/new')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/stations/new')
  })
}

function show(req,res){
  Station.findById(req.params.id)
  .then(station =>{
    res.render(`stations/show`,{
      title:'Station Detail',
      station
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function createReview(req,res){
  Station.findById(req.params.id)
  .then(station => {
    for (let key in req.body) {
      if (req.body[key] === '') delete req.body[key]
    }
    station.reviews.push(req.body)
    station.save()
    .then(() => {
      res.redirect(`/stations/${station._id}/show`)
    })
    .catch(err => {
      console.log(err)
      res.redirect('/')
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

export {
  newStation as new,
  create,
  show,
  createReview
}