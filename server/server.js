import express from "express";
import mongoose from "mongoose";
const app = express ()
import { port, dbURI } from './config/environment.js'



const startServers = async() => {
  try{

    // mongoose connect
    await mongoose.connect(dbURI)
    console.log('db connected success')

    app.listen(port, ()=> 
    console.log(`server up and running on port ${port}`)
    )
  }
  catch {
    console.log('something is wrong', err)
  }
}

startServers()