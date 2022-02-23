const mongoose = require ('mongoose');


const schema = mongoose.Schema({

    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String
    }
})

module.exports = mongoose.model("User",schema);