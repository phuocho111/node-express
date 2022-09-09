const mongoose = require('mongoose');
async function connect(){
    try{
    await mongoose.connect('mongodb://127.0.0.1:27017/node-express-dev');
        console.log('Connect successfully')
    }catch(error){
        console.log('Connect Error')
    }
}
module.exports = {connect};