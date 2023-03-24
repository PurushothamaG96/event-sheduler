const express =  require("express")
const app =express()
const mongoose = require("mongoose")
const router = require("./Router/routers.js")
const main=async()=>{
    await mongoose.connect("mongodb://localhost:27017/event")
    console.log("mongodb connected")
}
main()

app.use("/v1", router)

app.get("/v1", (req, res)=>{
    res.send("ok")
})


app.listen(5000, (err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("server is up at 5000")
    }
})