const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 

const EbookaccountSchema = mongoose.Schema({ 
    accountid: { 
        type: String, 
        maxLength: 10
    }, 
    username: { 
        type: String, 
        maxLength: 12
    }, 
    password: { 
        type: String, 
        minLength: 5
    }, 
    city: { 
        type: String, 
        maxLength: 10
    }, 
    ZIP: { 
        type: Number, 
        maxLength: 5
    }, 
    state: { 
        type: String, 
        maxLength: 15
    }, 
    startdate: { 
        type: Date, 
        default: Date.now
    },
    enddate: { 
        type: Date, 
        default: Date.now
    }, 
    credittype: { 
        type: String, 
        maxLength: 20
    }, 
    dateofpurchase: { 
        type: Date, 
        default: Date.now
    }
}); 
const Ebookaccount = model('ebookaccount', EbookaccountSchema); 
export default Ebookaccount; 