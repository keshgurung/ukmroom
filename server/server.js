import express from "express";
const app = express ()
const port = 4000

const startServers = async() => {
  try{
    app.listen(port, ()=> 
    console.log(`server up and running on port ${port}`)
    )
  }
  catch {
    console.log('somethinf is wrong', err)
  }
}

startServers()