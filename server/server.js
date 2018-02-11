const path = require('path');
const express = require('express');

var PORT = 3000;

const PublicPath = path.join(__dirname,'../public');


var app = new express();

app.use(express.static(PublicPath));

// app.get('/' , (req,res) => {

// 	res.send('PublicPath/index.html');
// });


app.listen(PORT , (err , result) => {

	if(err){
		return console.log('Problem');
	}


   console.log(`port is running on ${PORT}`);
});