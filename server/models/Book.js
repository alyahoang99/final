const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 

const BookSchema = mongoose.Schema({ 
    bookid: { 
        type: String, 
        maxLength: 10
    }, 
    bookname: { 
        type: String, 
    },
    author: { 
        type: String
    }, 
    publisher: { 
        type: String
    }, 
    price: { 
        type: mongoose.SchemaTypes.Double
    }, 
    description: { 
        type: String
    }
}); 
const Book = model('book', BookSchema); 
export default Book; 