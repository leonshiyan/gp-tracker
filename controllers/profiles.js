import { Profile } from '../models/profile.js'

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

function addMilage(req,res){
  Profile.findById(req.user.profile._id)
  .then(profile => {
    profile.milage += req.body.milage
    profile.save()
    res.redirect('/profiles')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/profiles')
  })
}


export {
  index,
  addMilage
}