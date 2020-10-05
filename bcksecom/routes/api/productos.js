// {{host}}/api/productos/

const express = require("express");
let router = express.Router();

let productosArray = [];

router.get('/all',(req,res)=>{
    res.status(200).json(productosArray);
});

router.post('/new', (req,res)=>{
    const {sku, name, price} = req.body;
    const id = productosArray.length + 1;
    productosArray.push({id, sku, name, price});
    res.status(200).json({id, sku, name, price});
});

router.put('/upd/:id', (req,res)=>{
    //do something here
    res.status(405).json({"msg": "aun no implementado"});
});

module.exports = router;