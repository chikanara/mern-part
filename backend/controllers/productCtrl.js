const Product = require("../models/Product")


const getProducts = async (req,res) => {
    try {
        let products = await Product.find()
        res.send(products)
    } catch (error) {
        res.status(500).send({err:error.message})
    }
}
const addProduct = async(req,res) => {
        const {name,company,price,category}= req.body
        try {
            // create new product
            let newProduct = new Product({
                name,company,price,category
            })
            //save
            newProduct = await newProduct.save()
            res.send(newProduct)
        } catch (error) {
            res.status(500).send({err:error.message})
        }
    }

const editProduct = async (req,res) => {
    // const {name,company,price,category}= req.body
    const productID = req.params.productID
    try {
        let editedProduct = await Product.findByIdAndUpdate(productID,req.body,{new:true})
        res.send(editedProduct)
    } catch (error) {
        res.status(500).send({err:error.message})
    }
}

const deleteProduct = async (req,res) => {
    // const {name,company,price,category}= req.body
    const productID = req.params.productID
    try {
        let deletedProduct = await Product.findByIdAndDelete(productID)
        res.send(deletedProduct)
    } catch (error) {
        res.status(500).send({err:error.message})
    }
}
module.exports = {getProducts,addProduct,editProduct,deleteProduct}