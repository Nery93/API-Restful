const ProductsMoedl = require('../models/products')

async function get(req,res){
    const {id} = req.params ///?id=123

    const obj = id ? { _id: id} : null   

    const products = await ProductsMoedl.find(obj)


    res.send(products)
}

module.exports = {
    get,
}