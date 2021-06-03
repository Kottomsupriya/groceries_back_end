const mongoose = require('mongoose');

const stockSchema = mongoose.Schema({
    image:String,
    category:String,
    title:String,
    quantity:Number,
    units:String,
    price:Number,
    description:String,
    company:String
});

const stock = mongoose.model('stocks',stockSchema);

module.exports = stock;