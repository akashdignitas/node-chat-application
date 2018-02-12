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

	socket.emit('new-user',{

		from : "Admin",
		text:  "Welcome to Chat App"

	});


	socket.broadcast.emit('new-user-add',{
           
           from: "Admin",
           text : "New User Joined",
           createdAt: new Date().getTime()  


	});

	socket.on('create-msg', (data)=>{

		console.log(data);

		io.emit('new-msg', {

			from: data.from,
			text: data.text,
			createdAt: new Date().getTime()
		});


		// socket.broadcast.emit('new-msg', {

		// 	from: data.from,
		// 	text: data.text,
		// 	createdAt: new Date().getTime()
		// });

	});

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