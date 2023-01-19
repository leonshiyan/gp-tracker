import mongoose from "mongoose"

const Schema = mongoose.Schema

const reviewSchema = new Schema({
  content: {type: String, default: 'No content provided'},
  rating: {type: Number, min: 1, max: 5, default: 5}
}, {
  timestamps: true
})

const stationSchema = new Schema({
  name: {
    type: String, 
    enum:["Chevron","Costco","Esso","Petro-Canada","Shell"]
  },
  address:{
    type:String,
    match: /[A-Z]{2},(CA|US)$/,
    required: [true, 'Address is required']
  },
  reviews:[reviewSchema]
}, {
  timestamps: true
})



const Station = mongoose.model('Station', stationSchema)

export {
  Station
}
