const express = require("express")
const shedules = require("../models/shedule.js")
const router = express.Router()


router.use(express.urlencoded())
router.use(express.json())


router.post("/events", async(req, res)=>{
    try{
        const {title, location, description, startTime, endTime} = req.body
        if(!title||!location||!description||!startTime||!endTime){
            if(!title){
                return res.status(400).json({
                    "error":"Validation error:title require"
                })
            }
            else if(!location){
                return res.status(400).json({
                    "error":"Validation error:location require"
                })
            }
            else if(!description){
                return res.status(400).json({
                    "error":"Validation error:description require"
                })
            }
            else if(!startTime){
                return res.status(400).json({
                    "error":"Validation error:startTime require"
                })
            }
            else if(!endTime){
                return res.status(400).json({
                    "error":"Validation error:enTime require"
                })
            }

        }
        let data = await shedules.create(req.body)
        res.status(201).json(data)
    }catch(e){
        res.json({
            status:"Failure",
            message:e.message
        })
    }
})

router.get("/events", async(req, res)=>{
    try{
        let data = await shedules.find()
        res.status(200).json(data)
    }catch(e){
        res.json({
            status:"Failure",
            message:e.message
        })
    }
})

router.get("/events/:id", async(req, res)=>{
    try{
        let data = await shedules.findOne({_id:req.params.id})
        res.status(200).json(data)
        
    }catch(e){
        res.status(404).json({
            errot:"There is no event in that i"
        })
    }
})

router.delete("/events/:id", async(req, res)=>{
    try{

        let data = await shedules.deleteOne({_id:req.params.id})
        res.status(204).json(data)
        
    }catch(e){
        res.status(204).json()
    }
})

router.put("/events/:id", async(req, res)=>{
    try{
        const {title, location, description, startTime, endTime} = req.body
        if(!title||!location||!description||!startTime||!endTime){
            if(!title){
                return res.status(400).json({
                    "error":"Validation error:title require"
                })
            }
            else if(!location){
                return res.status(400).json({
                    "error":"Validation error:location require"
                })
            }
            else if(!description){
                return res.status(400).json({
                    "error":"Validation error:description require"
                })
            }
            else if(!startTime){
                return res.status(400).json({
                    "error":"Validation error:startTime require"
                })
            }
            else if(!endTime){
                return res.status(400).json({
                    "error":"Validation error:enTime require"
                })
            }

        }
        await shedules.updateOne({_id:req.params.id}, req.body)
        let data =await shedules.findOne({_id:req.params.id})
        res.status(200).json(data)
        
    }catch(e){
        res.status(404).json({
            status:"Failure",
            message:"not updated"
        })
    }
})

module.exports =router