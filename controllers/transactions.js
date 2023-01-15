import { Transaction } from '../models/transaction.js'
import { Station } from "../models/station.js"

function newTransaction (req,res){
  Station.find({})
  .then(stations =>{
    res.render('transactions/new',{
      title: 'Add Transaction',
      stations
    })
  })
}
function index(req, res) {
  Transaction.find({})
  .then(transactions => {
    res.render('transactions/index', {
      title: 'Transactions',
      transactions
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}

function create(req, res) {
  req.body.owner = req.user.profile._id
  Transaction.create(req.body)
  .then(transaction => {
    res.redirect('/transactions')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/transactions')
  })
}

export {
  newTransaction as new,
  index,
  create,
  // show,
  // edit,
  // update,
  // deleteTaco as delete
}