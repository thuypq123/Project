const express = require('express');
const login_router = express.Router();
const jwt = require("jsonwebtoken")
const jwtsecret = "123"
//=========================================

login_router.get('/', function(req, res){
    res.send("login success");
    // console.log(req.headers.cookie.split("token=")[1]);
})
login_router.post('/', function(req, res){
    var token = jwt.sign({ name: req.body.username}, jwtsecret)
    console.log(token)
    res.cookie("token",token)
    res.send(token)
    jwt.verify(token, jwtsecret, function(err,decoded){
        console.log(decoded);
    })
})

//========================================
module.exports = login_router;