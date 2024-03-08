const express =require("express")
const User = require("./users")
const router= express.Router()

router.post("/",async(re,res)=>{
    try {
        const user=req.body
        const newUser = await createUser(user)
        res.status(201).send({message:"User created",data:newUser})
    } catch (error) {
        res.status(400).send({message:error})
    }

})
router.get("/",async(req,res)=>{
    try {
        const users= await User.find()
        console.log(users)
        res.send({message:"All users",data:users})
    } catch (error) {
        res.status(400).send({message:error})
    }
})


