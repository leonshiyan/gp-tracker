import { Profile } from '../models/profile.js'
import { Transaction } from '../models/transaction.js'

function index(req, res) {
  Profile.find({})
  .then(profiles => {
    Profile.findById(req.user.profile._id)
    .populate('transactions')
    .then(myProfile =>{
      res.render('profiles/index', {
        profiles,
        myProfile,
        title: "Your Profile"
    })
  })
})
.catch(err => {
  console.log(err)
  res.redirect('/')
})
}

export {
  index
}