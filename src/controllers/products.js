const ProductsMoedl = require('../models/products')

async function get(req,res){
    const products = await ProductsMoedl.find()


    res.send(products)
}

module.exports = {
    get,
}