const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 

const CategorySchema = mongoose.Schema({ 
    categoryid: { 
        type: String, 
        maxLength: 12, 
    }, 
    categoryname: { 
        type: String, 
        maxLength: 20
    }, 
    modifieddate: { 
        type: Date, 
        default: Date.now
    }
    
}); 
const Category = mongoose.model('Category', CategorySchema); 
export default Category; 


