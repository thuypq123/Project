const express = require('express');
const chat_router = express.Router();
var path=require("path")
//====================================

chat_router.get('/', function(req, res)
{
    res.sendFile(path.join(__dirname + '/../index.html'));
})
module.exports = chat_router;