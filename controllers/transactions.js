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



export {
  newTransaction as new,
  index,
  // create,
  // show,
  // edit,
  // update,
  // deleteTaco as delete
}