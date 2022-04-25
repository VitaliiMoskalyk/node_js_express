const express = require('express');
const products=require('../../data/products.json')
const productsRoutes = express.Router();

productsRoutes.get('/', (req, res) => {
   console.log(req.method);
    res.json({
        status: 'success',
        code: 200,
        data: {
            result:products
        }
        
    })
   
})

module.exports = productsRoutes;