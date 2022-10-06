const app = require("express")();

const cors = require('cors')
const {body} = require("express-validator");
const express = require("express");
const connect = require("./src/config/db");
const { register, login } = require("./src/controllers/auth.controller");
const productController = require("./src/controllers/product.controller")

const PORT = process.env.PORT || 4000;

const corsOptions = {
    origin: '*',
    credentials: true,            
    optionSuccessStatus: 200
}
app.use(cors());
app.use(express.json())
app.post("/register", cors(corsOptions),
body("name").isString().isLength({min : 5}),
body("email").isEmail(),
body("password").isLength({min : 6})
,cors(corsOptions),  register)


app.use("/login", cors(corsOptions), login)
app.use("/product", cors(corsOptions),  productController)
// const start = async () => {
  app.listen(PORT, async() => {
    try {
      await connect();
      console.log(`Listening on Port ${PORT}`);
    } catch (error) {
       console.log(error)
    }
  });
// };
// start();



// app.listen(PORT  || 8080 , async () => {
// 	try {
// 		await connect()
// 		console.log("Connected to DB");
// 	} catch (error) {
// 		console.log(error);
// 	}
// });
