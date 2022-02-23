const Client = require('../Model/clientModel');

module.exports.createClient = async (req , res) => {
    try {
        const client = Client({
            noms: req.body.noms,
            sexe:req.body.sexe,
            adresse:req.body.adresse,
            telephone:req.body.telephone,
            etatcivil:req.body.etatcivil,
            email:req.body.email
        })
        const data = await client.save();
        res.status(200).json({Client:data});
    } catch (error) {
        res.status(500).json("err");
    }
}

module.exports.updateClient = async (req , res) =>{
    try {
        const client = await Client.findByIdAndUpdate(req.body._id,{$set:{
            noms: req.body.noms,
            sexe:req.body.sexe,
            adresse:req.body.adresse,
            telephone:req.body.telephone,
            etatcivil:req.body.etatcivil,
            email:req.body.email
        }
    })
    res.status(200).json({Client:client});
    } catch (error) {
        res.status(500).json({err:error})
    }
}

module.exports.showClient = async (req , res) => {
    try {
        const client = await Client.findOne(req.body);
        const data = client;
        res.status(200).json({Client:data});
    } catch (error) {
        res.status(500).send("err");
    }
}

module.exports.deleteClient = async (req , res) => {
    try {
        const client = await Client.findOneAndDelete(req.body);
        const data = client;
        res.status(200).json({Client:data});
    } catch (error) {
        res.status(500).send("err");
    }
}