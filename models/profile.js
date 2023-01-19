import mongoose from 'mongoose'

const Schema = mongoose.Schema

const profileSchema = new Schema({
  name: String,
  avatar: String,
  transactions: [{type: Schema.Types.ObjectId, ref: "Transaction"}],
  milage: {type: Number, default: 0}
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}
