const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 

const ProductSchema = mongoose.Schema({ 
    productid: { 
        type: String, 
        maxLength: 12
    }, 
    productname: { 
        type: String, 
        maxLength: 15
    }, 
    brand: { 
        type: String, 
        maxLength: 15
    },
    price: { 
        type: mongoose.SchemaTypes.Double
    }, 
    description: { 
        type: String, 
        maxLength: 100
    }
});
const Product = mongoose.model('product', ProductSchema); 
export default Product; 