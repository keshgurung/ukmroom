import { text } from 'express'
import mongoose from 'mongoose'
import uniqueValidator from 'mongooseUniqueValidator'

const roomSchema = new mongoose.Schema(
  {
    // adding a user
    owner: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
    //about the property
    addressFirst: { type: String, required: true },
    addressCity: { type: String, required: true },
    addressPostalCode: { type: String, required: true },
    propertyType: { type: String, required: true },
    totalBedrooms: {type: Number, required: true},
    totalBathrooms: {type: Number, required: true},
    totalRoomsToRent: {type: Number, required: true},
    propertyAmenities: [{type: String, required: true,}],

    // About the room
    roomTitle: {type: text, required: true},
    roomDescription: {type: text, required: true},
    rentPerMonth: {type: Number, required: true},
    utilityCost: {type: Boolean, required: true, default: false},
    roomType: {type: String, required: true},
    roomStatus: {type: String, required: true},
    ensuiteBathroom: {type: Boolean, required: true, default: false},
    // qualityRating: { type: Number, required: true, min: 1, max: 5 },
    owner: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  },
  {
    timestamps: true,
  }
)

roomSchema.plugin(uniqueValidator)

export default mongoose.model('Room', roomSchema)