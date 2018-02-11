 	var socket = io();

 	socket.on('connect',function (){
 		console.log('connected to server');

 		socket.emit('create-msg', {
 			from:"Akash",
 			text: "Hello Chacha"

 		});
 	});

 	socket.on('disconnect',function (){
 		console.log('disconnected from server');
 	});

 