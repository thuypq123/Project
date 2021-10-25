const express = require('express')
const app = express()
const http = require('http');
const jwt = require("jsonwebtoken")
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: "*",
});
//==================Riquire Routes===========================
const db= require('./Configs/configDB')
const login_router = require('./routes/login.route')
const chat_router = require('./routes/chat.route')

db.connect();
//==================app.use====================
app.use(express.json()) 
app.use(express.urlencoded({ extended: true }))
app.use("/Public", express.static('./Public/'));

//===================== ROUTE ====================
app.use('/login', login_router);
app.use('/chat', chat_router); 

//===================== ROUTE ====================
app.get('/', function(req, res){
    res.sendFile(__dirname + "/Public/login.html");
})
//===================== Socket =================
io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('init', (socket)=>{

  })
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});


//======================================
server.listen(3000,console.log("listen on port 3000"));