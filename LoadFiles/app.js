var express = require('express');
var app = express();
var path = require('path');
var bodyparser = require('body-parser');
app.use(bodyparser.json());

app.use(express.static(path.join(__dirname, 'files')));
app.listen(3003,()=>console.log('App is listening to 3003 port'));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname+'/files/index.html'));
});
app.post('/ajax',(req,res)=>{
    var obj={};
    console.log(JSON.stringify(req.body));
});