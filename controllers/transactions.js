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

function show(req, res) {
  Transaction.findById(req.params.id)
  .populate('owner')
  .then(transaction => {
    res.render('transactions/show', {
      title: "Transaction show",
      transaction
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/transaction')
  })
}

function update(req, res) {
  Transaction.findById(req.params.id)
  .then(transaction => {
    if (transaction.owner.equals(req.user.profile._id)) {
      transaction.updateOne(req.body)
      .then(()=> {
        res.redirect(`/transactions/${transaction._id}`)
      })
    } else {
      throw new Error('🚫 Not authorized 🚫')
    }
  })
  .catch(err => {
    console.log(err)
    res.redirect('/tacos')
  })
}
function edit(req, res) {
  Transaction.findById(req.params.id)
    .then(transaction => {
      Station.find({})
        .then(stations => {
          res.render('transactions/edit', {
            transaction,
            stations,
            title: 'edit transaction'
          });
        })
        .catch(err => {
          console.log(err);
          res.redirect('/transactions');
        });
    })
    .catch(err => {
      console.log(err);
      res.redirect('/transactions');
    });
}
function deleteTransac(req,res){
  
}
export {
  newTransaction as new,
  index,
  create,
  show,
  update,
  edit,
  deleteTransac as delete
}