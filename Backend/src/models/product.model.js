const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    // userId : {type : mongoose.Schema.Types.ObjectId, required : true},
    id : {type : Number, required: true, unique : true},
    title: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    rating: { type: Number, required: true , max:5, min:1},
  },{
    versionKey: false,
  }
);

module.exports = mongoose.model("products", productSchema);
