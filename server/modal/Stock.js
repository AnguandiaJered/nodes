const mongoose = require("mongoose");

const StockSchema = new mongoose.Schema({
    stockName : {
        type: String,
        required : true,
    },
    daysSinceIAte: {
        type: Number,
        required: true,
    },
});

const Stock = mongoose.model("Stock", StockSchema);
module.exports = Stock;