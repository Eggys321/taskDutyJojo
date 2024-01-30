const USER = require('../model/userModel');

// registration

const registration = async (req,res)=>{
    const {name, email, password} = req.body
    try {
        if(!name || !email || !password){
            res.status(400).json({success:false,message:"all fields are required to register"});
            return
        }
        const user = await USER.create({...req.body})
        res.status(201).json({success:true,message:"registration successful",user})
    } catch (error) {
        res.status(500).json({error})
    }
}


// login ftn

const login = async(req,res)=>{
    const {email,password} = req.body;
    if(!email || !password){
        res.status(400).json({success:false,message:"all fields are required to login"});
        return
    }
    try {
        // finding a reg email and validating the email
        const user = await USER.findOne({email});
        if(!user){
            res.status(404).json({success:false,message:"wrong credential"})
            return
        }

        // comparing password and validating the password
        const auth = await user.comparePassword(password);
        if(!auth){
            res.status(404).json({success:false,message:"wrong credential"})
            return
        }

       

        // token
        const token = await user.generateToken()
        console.log(token);
        if(token){
            res.status(200).json({user:{
                name:user.name,
                email:user.email
            },

            message:"logged in successfully",
            token

        
        })
        return
        }
    } catch (error) {
        res.status(500).json({error})
    }

}



module.exports = {
registration,
login
}