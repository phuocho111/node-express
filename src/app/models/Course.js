const mongoose = require('mongoose');
const slug = require('mongoose-slug-updater');
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;
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
//Add plugin
mongoose.plugin(slug);
Course.plugin(mongooseDelete,);

module.exports =  mongoose.model('Course', Course);