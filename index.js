const express = require('express');
const cors = require('cors');
const productsRoutes=require('./routes/api/products.js')

const app = express();

app.all(cors);

app.use('/api/products', productsRoutes)



app.listen(3002,()=>console.log('server on!!'))