import { Transaction } from '../models/transaction.js'

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
  index,
  // create,
  // show,
  // edit,
  // update,
  // deleteTaco as delete
}