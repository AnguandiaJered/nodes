const User=require("../Model/userModel");


module.exports.createUser=async(req,res)=>{

    try {
        const user=User({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password
        });
        const data= await user.save();
        res.status(200).json({User:data})
    } catch (error) {
        res.status(500).json("err")
    }
}

module.exports.showUser=async(req,res)=>{
    try {
        const user=await User.findOne(req.body);

        const data=user;
        res.status(200).json({User:data})
    } catch (error) {
       res.status(500).send("err")
        
    }
}

module.exports.update=async(req,res)=>{
 try {
     const user= await User.findByIdAndUpdate(req.body._id,{$set:{
         name:req.body.name,
         email:req.body.email,
         password:req.body.password
     }
         
     });
     res.status(200).json({User:user})
 } catch (error) {
    res.status(500).json({err:error})
 }
}



module.exports.deleteUser=async(req,res)=>{
    try {
        const user=await User.findOneAndDelete(req.body);
        const data=user;
        res.status(200).json({User:data})
    } catch (error) {
       res.status(500).send("err")
        
    }
}


   
   
