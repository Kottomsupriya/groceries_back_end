const express = require("express");
const router = express.Router();
const user = require("../Models/user");

router.post("/", async (req, res) => {
  let user_ins = {
    name: req.body.name,
    email: req.body.email,
    mobile: req.body.mobile,
    password: req.body.password,
    address: req.body.address,
    dob: req.body.dob,
    gender: req.body.gender,
  };
  console.log(user_ins);
  user(user_ins).save((err, result) => {
    if (err) console.log(err);
    res.status(201).json(result);
  });
});

<<<<<<< HEAD

module.exports = router;
//comment line




=======
module.exports = router;
>>>>>>> 352525d02ce7de119c41d6df89797c9f56dad2c7
