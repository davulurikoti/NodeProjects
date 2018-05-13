var express = require('express');
var app = express();
var path = require('path');
var bodyparser = require('body-parser');
const accountSid = 'ACe813da4d5c69162117755494bf5f7d22';
const authToken = '9bce519bec863ea3b55b77fd4dd8af11';
const client = require('twilio')(accountSid, authToken);

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

app.get('/sendsms',(req,res)=>{
client.messages
  .create({
     body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
     from: '+12104054266',
     to: '+19377059927'
   })
  .then(message => console.log(message.sid))
  .done();
      res.send('Hola');
});