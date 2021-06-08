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
    console.log(req.body._id)
    stock.deleteOne({_id:req.body._id},(err,response)=>{
        if(err) throw err;
        else{
            console.log('Deleted Succesfully');
        }
    })
});

router.get('/',(req,res)=>{
    res.send('stock-delete');
})

module.exports = router;