import express from "express";
import Users from "../modals/user.js";

const router = express.Router();

router.get("/", (req, res) => {
    res.render("login");
})


router.post("/login",async (req,res)=>{
    try{
        
const newUser = new Users({
    
    email:req.body.email,
    password:req.body.password,
})
await newUser.save();
res.status(201).send("User has been created")
    }
    catch(err){

    }
});

export default router;