const router=require('express').Router();
const User=require("../Controller/userController")

router.post("/user/create",User.createUser)
router.get("/user/showbyid",User.showUser)
router.put("/user/updateUser",User.update);
router.delete("/user/delete",User.deleteUser);
module.exports=router