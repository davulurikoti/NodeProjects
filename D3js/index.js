const express = require('express');
const app = express();

app.get('/',(req,res)=>{
	res.sendFile(__dirname+"/index.html");
});

app.listen(3000,()=>{
	console.log("Listening to 3000 port");
});