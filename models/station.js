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
  }
}, {
  timestamps: true
})

const Station = mongoose.model('Station', stationSchema)

export {
  Station
}
