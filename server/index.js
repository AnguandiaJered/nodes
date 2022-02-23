const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const StockModal = require("./modal/Stock");

app.use(express.json());
app.use(cors());
mongoose.connect("mongodb+srv://root:root@crud.iualp.mongodb.net/stock?retryWrites=true&w=majority",{

    useNewUrlParser: true,
});

app.post("/insert", async (req,res) =>{
    const stock = new StockModal({stockName: stockName , daysSinceIAte : days});
    const stockName = req.body.stockName;
    const days = req.body.days;
    try{
        await stock.save();
    }catch(err){
        console.log(err);
    }
});
app.get("/read", async (req,res) =>{
  StockModal.find({},(err,result) =>{
      if(err){
          res.send();
      }

      res.send(result);
  });
});

app.listen(3001, () => {
    console.log('Le serveur est lancé sur le port 3001...');
});