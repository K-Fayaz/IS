const bcrypt  = require("bcrypt");
const express = require("express");
const User    = require("../Model/user");



const router  = express.Router();


router.get("/signup",(req,res)=>{
    res.render("signup");
});

router.post("/signup",async(req,res)=>{
    try{
        console.log(req.body);
        const user = await User.findOne({ email: req.body.email });
        if(!user)
        {
            const newUser = new User;
            newUser.username = req.body.username;
            newUser.email = req.body.email;
            newUser.password = await bcrypt.hash(req.body.password,8);

            await newUser.save();
            console.log(newUser);
            res.render("home");
        }else{
            res.render("/login");
        }
    }
    catch(err)
    {
        console.log(err);
    }
})

router.get("/login",(req,res)=>{
    res.render("login");
})

module.exports = router;