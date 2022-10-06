const mongoose = require('mongoose');
module.exports =()=>{
    mongoose.connect("mongodb+srv://aruneja:arunteja123@cluster0.juemcu7.mongodb.net/?retryWrites=true&w=majority")
}

// const { default: mongoose } = require("mongoose");
// require("dotenv").config();

// const connect = async () => {
// 	try {
// 		return mongoose.connect(process.env.DB);
// 	} catch (error) {
// 		return console.log(error);
// 	}
// };

// module.exports = { connect };