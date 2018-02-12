 	var socket = io();

 	socket.on('connect',function (){
 		console.log('connected to server');
 	});

 	socket.on('disconnect',function (){
 		console.log('disconnected from server');
 	});

   socket.on('new-msg', function(message) {

   	console.log(message);

   });


   socket.on('new-user', function(message) {

   	console.log(message);

   });


   socket.on('new-user-add', function(message) {

   	console.log(message);

   });