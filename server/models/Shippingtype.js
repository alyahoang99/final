const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 

const ShippingtypeSchema = mongoose.Schema({ 
    shippingtypename: { 
        type: String, 
        maxLength: 10
    }, 
    shippingtypeid: { 
        type: String, 
        maxLength: 5
    }
    
}); 
const Shippingtype = model('shippingtype', ShippingtypeSchema); 
export default Shippingtype; 