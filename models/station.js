import mongoose from "mongoose"

const Schema = mongoose.Schema

const stationSchema = new Schema({
  name: {
    type: String, 
    enum:["Chevron","Costco","Esso","Petro-Canada","Shell"]
  },
  address:{
    type:String,
    required: true
  },
  reviews:[reviewSchema]
}, {
  timestamps: true
})
const reviewSchema = new Schema({
  content: String,
  rating: {type: Number, min: 1, max: 5, default: 5}
}, {
  timestamps: true
})

const Station = mongoose.model('Station', stationSchema)

export {
  Station
}
