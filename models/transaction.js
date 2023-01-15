import mongoose from 'mongoose'

const Schema = mongoose.Schema

const transacSchema = new Schema({
  amount: Number,
  gasAmount: Number,
  unitPrice: Number,
  owner: {type: Schema.Types.ObjectId, ref: "Profile"}
}, {
  timestamps: true
})

const Transaction = mongoose.model('Transaction', transacSchema)

export {
  Transaction
}