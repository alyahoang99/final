const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 

const OrderdetailSchema = mongoose.Schema({ 
    orderid: { 
        type: String, 
        maxLength: 10
    }, 
    userid: { 
        type: String, 
        maxLength: 10
    }, 
    receivername: { 
        type: String, 
        maxLength: 30
    }, 
    address: { 
        type: String, 
        maxLength: 50
    }, 
    city: { 
        type: String, 
        maxLength: 40
    }, 
    ZIP: { 
        type: Number, 
        maxLength: 10
    }, 
    state: { 
        type: String, 
        maxLength: 20
    }, 
    shippingtypename: { 
        type: String, 
        maxLength: 10
    }, 
    dateofpurchase: { 
        type: Date, 
        default: Date.now
    }, 
    totalpayment: { 
        type: mongoose.SchemaTypes.Double
    }
});
const Orderdetail = model('orderdetail', OrderdetailSchema); 

export default Orderdetail;
