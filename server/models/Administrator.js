// how we able to use the mongoose library 
const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 

// the code required to make this is a moongoose Schema 
const AdministratorSchema = mongoose.Schema({ 
    adminid: { 
        type: String, 
        maxLength: 12
    }, 
    adminaccountname: { 
        type: String, 
        maxLength: 30
    }, 
    password: { 
        type: String, 
        minLength: 5, 
        required: true
    },
    createdate: { 
        type: Date, 
        default: Date.now
    }

}); 
const Administrator = model('Administrator', AdministratorSchema); 
module.exports = Administrator; 