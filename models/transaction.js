import mongoose from 'mongoose'

const Schema = mongoose.Schema

const transacSchema = new Schema({
  amount: Number,
  gasAmount: { type: String, required: true },
  unitPrice: Number,
  owner: {
    type: Schema.Types.ObjectId, 
    ref: "Profile"
  },
  gasType:{
    type:String,
    enum:["87","89","91","94"]
  },
  station: {
    type: Schema.Types.ObjectId, 
    ref: "Profile"},
}, {
  timestamps: true
})

const Transaction = mongoose.model('Transaction', transacSchema)

export {
  Transaction
}