const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 

const StatetaxSchema = mongoose.Schema({ 
    stateid: { 
        type: String, 
        maxLength: 10
    }, 
    salestaxrate: { 
        type: mongoose.SchemaTypes.Double
    },
    statename: { 
        type: String,
        maxLength: 20
    }


})
const Statetax = model('statetax', StatetaxSchema); 
export default Statetax; 