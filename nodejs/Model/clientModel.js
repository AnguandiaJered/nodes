const mongoose = require('mongoose');

const schema = mongoose.Schema({
    noms:{
        type:String,
        require:true
    },
    sexe:{
        type:String,
        require:true
    },
    adresse:{
        type:String,
        require:true
    },
    telephone:{
        type:String,
        require:true
    },
    etatcivil:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    }
});

module.exports = mongoose.model("Client",schema);
