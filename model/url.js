const mongoose=require('mongoose');

const UrlSchema = new mongoose.Schema({
    shortId:{
        type:String,
        required:true,
        unique:true,
    },
    redirectURL:{
        tupe:String,
        required:true,
    },
    visitHistory:[{timestamp:{type:Number}}]
},
{
    timeseries:true
});

const URL=mongoose.model("URL", UrlSchema);

module.exports=URL;
