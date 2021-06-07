const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const stock = require('../Models/stock');

mongoose.connect('mongodb://127.0.0.1:27017/g_store',{
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
});

router.post('/',async(req,res)=>{
    let search = req.body.search;
    console.log(search);
    stock.find({$or:[{category:search},{title:search},{units:search},{description:search},{company:search}]},(err,response)=>{
        if(err) throw err;
        else{
            console.log(response);
            res.send(response);
        }
    })
});
router.get('/',(req,res)=>{
    res.send('stock-search');
})

module.exports = router;