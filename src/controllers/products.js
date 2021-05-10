const ProductsModel = require('../models/products')

async function get(req,res){
    const {id} = req.params ///?id=123

    const obj = id ? { _id: id} : null   

    const products = await ProductsMoedl.find(obj)


    res.send(products)
}

async function post(req,res){
    const{
        name,
        brand,
        price, 
    } = req.body

    const product = new ProductsModel({
        name,
        brand,
        price,
    })

    product.save()

    res.send({
        message:'sucess'
    }) 
}

module.exports = {
    get,
    post,
}