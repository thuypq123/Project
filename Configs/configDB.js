const mongoose = require('mongoose');

var url = 'mongodb+srv://socket_io:thuy1234@cluster0.uhkg4.mongodb.net/socket_io?retryWrites=true&w=majority'

async function connect(){
    try {
        await mongoose.connect(url);
        console.log('Success Connected');
    } catch (error) {
        console.log(error);
    }
}

module.exports ={connect};