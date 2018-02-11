const path = require('path');
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

var PORT = process.env.PORT || 3000;

const PublicPath = path.join(__dirname,'../public');


var app = new express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(PublicPath));

io.on('connection',(socket)=>{

	console.log('new user connected');

	socket.on('disconnect',()=>{
		console.log('User Disconnected');

	});

});

server.listen(PORT , (err , result) => {

	if(err){
		return console.log('Problem');
	}


   console.log(`port is running on ${PORT}`);
});