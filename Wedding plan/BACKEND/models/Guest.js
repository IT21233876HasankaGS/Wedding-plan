const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const GuestSchema = new Schema({
    name : {
        type : String,
        required : true 
    },
    age : {
        type : Number,
        required : true 
    },
    gender : {
        type : String,
        required : true
    }

})


const Guest = mongoose.model("Guest",GuestSchema);

module.exports = Guest;