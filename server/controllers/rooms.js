import Room from '../models/rooms'

//Get all rooms

export const getAllCities = async ( _req,res ) => {
  const rooms = await Room.find()
  return res.status(200).json(rooms)
}

//get a single room 

export const getSingleRoom = async ( _req, res ) => {
  try {
    const { id } = _req.params
    const singleRoom = await Room.findById(id)
    if (!singleRoom) throw new Error()
    return res.status(200).json(singleRoom)
  } catch (err) {
    return res.status(400).json({ message: ' room not found' })
  }
}