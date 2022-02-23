const router = require('express').Router();
const User = require("../Controller/userController");
const Product = require("../Controller/productController");
const Client = require("../Controller/clientController");


router.post("/user/create",User.createUser);
router.get("/user/showbyid",User.showUser);
router.put("/user/updateUser",User.update);
router.delete("/user/delete",User.deleteUser);

router.post("/product/create",Product.createProduct);
router.get("/product/showbyid",Product.showProduct);
router.put("/product/update",Product.updateProduct);
router.delete("/product/delete",Product.deleteProduct);

router.post("/client/create",Client.createClient);
router.get("/client/showbyid",Client.showClient);
router.put("/client/updateclient",Client.updateClient);
router.delete("/client/delete",Client.deleteClient);

module.exports=router