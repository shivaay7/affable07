const express = require("express");
const router = express.Router();
const Order = require('../models/Orders');

router.post("/orderData", async (req, res) => {
    try {
      let data = req.body.order_data;
      data.unshift({ Order_date: req.body.order_date }); // use unshift instead of splice to add the order date to the beginning of the array
  
      // check if email exists in db
      let order = await Order.findOne({ email: req.body.email });
      console.log(order);
      if (!order) {
        // if email does not exist, create a new document
        await Order.create({
          email: req.body.email,
          order_data: [data],
        });
      } else {
        // if email exists, update the existing document
        await Order.findOneAndUpdate(
          { email: req.body.email },
          { $push: { order_data: data } }
        );
      }
  
      res.json({ success: true });
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Server Error");
    }
  });

  router.post("/myorderData", async (req, res) =>{
    try{
        let myData = await Order.findOne({'email':req.body.email})
        res.json({orderData:myData})
    }catch(error){
        res.send("Server Error",error.message)
    }
  });
  


module.exports = router;