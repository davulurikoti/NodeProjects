const express = require('express');
var app = express();
var path = require('path');

app.listen(3000,()=>{
	console.log('Listening to 3000 port');
});

app.get('/',(req,res)=>{
	res.sendFile(path.join(__dirname+'/index.html'));
});

app.post('/getnumber', function(req, res){
	console.log('body: ' +JSON.stringify(req.body));
	res.send(req.body);
});
