import mongoose from 'mongoose'
import uniqueValidator from 'mongooseUniqueValidator'

const roomSchema = new mongoose.Schema(
  {
    type: { type: String, required: true },
    title: { type: String, required: true },
    location: { type: String, required: true },
    text: { type: String, required: true, maxlength: 300 },
    price: { type: Number, required: true, min: 1, max: 3 },
    valueRating: { type: Number, required: true, min: 1, max: 5 },
    qualityRating: { type: Number, required: true, min: 1, max: 5 },
    owner: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
    city: { type: String, required: true },
    cityname: { type: String, required: true },
    ratings: [ ratingsSchema ]
  },
  {
    timestamps: true,
  }
)

roomSchema.plugin(uniqueValidator)

export default mongoose.model('Room', roomSchema)