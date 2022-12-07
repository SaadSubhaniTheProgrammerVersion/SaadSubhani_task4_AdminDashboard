const mongoose = require('mongoose');

var Student=mongoose.model('Students',{
    name:{type:String},
    cms:{type:Number, unique:true},
    email:{type:String},
    phone:{type:String},
    address:{type:String}
    });

module.exports= {Student};
