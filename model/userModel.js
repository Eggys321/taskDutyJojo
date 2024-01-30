const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

const userSchema = new Schema({
    name:{
        type:String,
        required:[true,'Please provide a name'],
        minlength:[4,'min lenght for user name is 4']
    },
    email:{
        type:String,
        required:[true,'Please provide an email address'],
        unique:true,

    },
    password:{
        type:String,
        required:[true,'Please provide a password'],
        minlength:[8,'Password min lenght must be 8']
    }
},{timestamps:true})

// hashing passwords
userSchema.pre('save',async function(next){
    const salt = await bcrypt.genSalt()
    this.password = await bcrypt.hash(this.password,salt)
    next()
})

// password comparison
userSchema.methods.comparePassword = async function(userPassword){
const isCorrect = await bcrypt.compare(userPassword,this.password)
return isCorrect
}

// generate token

userSchema.methods.generateToken = async function(params){
    let token = jwt.sign({userId : this._id},process.env.JWT_SECRETE)
    return token
}
const USER = mongoose.model('User',userSchema);
module.exports = USER