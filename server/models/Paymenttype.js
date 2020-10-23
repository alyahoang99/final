const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 

const PaymenttypeSchema = mongoose.Schema({ 
    paymenttypeid: { 
        type: String, 
        maxLength: 10
    }, 
    paymenttypename: { 
        type: String, 
        maxLength: 10
    }
}); 
const Paymenttype = model('paymenttype', PaymenttypeSchema); 
export default Paymenttype; 