const mongoose = require('mongoose');

const schema = mongoose.Schema({
    designation: {
        type: String,
        require: true
    },
    quantite: {
        type: Number,
        require: true
    },
    prix: {
        type: Number,
        require: true
    },
    devise: {
        type: String,
        require: true
    },
    categorie: {
        type: String,
        require: true
    },
    dateprod: {
        type: Date,
        require: true
    }
});


module.exports = mongoose.model("Product",schema);