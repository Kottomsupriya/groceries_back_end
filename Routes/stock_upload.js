const router = require('express').Router();
let stock = require('../Models/stock');

router.post(('/'), async(req, res) => {
    const image = req.body.image;
    const category = req.body.category;
    const title = req.body.title;
    const quantity = req.body.quantity;
    const units = req.body.units;
    const price = req.body.price;
    const description = req.body.description;
    const company = req.body.company;

    const newStockData = {
        image,
        category,
        title,
        quantity,
        units,
        price,
        description,
        company
    }

    console.log(newStockData);
    // const newStock = new stock(newStockData);

    // newStock.save().then(()=>res.json('Stock added'))
    // .catch(err=>res.status(400).json('error occured'+err));
    stock(newStockData).save((err, result) => {
    if (err) console.log(err);
    res.status(201).json(result);
  });
});

module.exports = router;