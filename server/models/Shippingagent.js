const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 

const ShippingagentSchema = mongoose.Schema({ 
    shippingagentid: { 
        type: String, 
        maxLength: 10
    }, 
    shippingagentname: { 
        type: String, 
        maxLength: 10
    }

});

const Shippingagent = model('shippingagent', ShippingagentSchema); 
export default Shippingagent; 