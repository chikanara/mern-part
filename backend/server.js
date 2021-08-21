
const express = require("express");
const app = express();
const configDB = require("./config/configDB")
const Product = require("./models/Product")
const productRouter = require("./routes/productRouter")
const userRouter = require("./routes/userRouter")

// 3.set env variable
require('dotenv').config({ path: './config/.env' })
//.set middleware
app.use(express.json())
app.use("/api",productRouter)
app.use("/auth",userRouter)
//2.config DB
configDB()

//CRUD
//create
// app.post("/api/add",async(req,res) => {
//     const {name,company,price,category}= req.body
//     try {
//         // create new product
//         let newProduct = new Product({
//             name,company,price,category
//         })
//         //save
//         newProduct = await newProduct.save()
//         res.send(newProduct)
//     } catch (error) {
//         res.status(500).send({err:error.message})
//     }
// })
//READ
// app.get("/api/products",async(req,res)=>{
//     try {
//         let products = await Product.find()
//         res.send(products)
//     } catch (error) {
//         res.status(500).send({err:error.message})
//     }
// })

//1. creation server
const PORT = 5000;
app.listen(PORT, (err) => {
  err ? console.error(err) : console.log(`Server is running on port ${PORT}`);
});
// if(err) {
//     console.error(err
// }
// else {
//     console.log(`Server is running on port ${PORT}`)
// }
