const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 

const Ebookoption = mongoose.Schema({ 
    ebookplanid: { 
        type: String, 
        maxLength: 10
    }, 
    ebookplanname: { 
        type: String, 
        maxLength: 20
    }, 
    price: { 
        type: mongoose.SchemaTypes.Double
    }, 
    description: { 
        type: String, 
        maxLength: 100
    }

}); 
const Ebookoption = model('ebookoption', EbookoptionSchema); 
export default Ebookoption; 