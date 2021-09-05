const { getProducts, addProduct, editProduct, deleteProduct } = require("../controllers/productCtrl")
const isAuth = require("../middleware/isAuth")

const router = require("express").Router()
router.get("/products",getProducts)
router.post("/add",addProduct)
router.put("/edit/:productID",editProduct)
router.delete("/delete/:productID",deleteProduct)

module.exports = router