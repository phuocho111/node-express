const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const Course = new Schema({
    name: {type: String,required:true, maxLength: 255},
    description: {type: String, maxLength: 255 },
    slug:{type:String, slug:"name", unique:true},
    image:{type:String},
    videoId:{type:String, required:true},
    level:{type:String},
},{
    timestamps:true,
})

module.exports =  mongoose.model('Course', Course);