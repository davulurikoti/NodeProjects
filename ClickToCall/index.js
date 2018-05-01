// Download the Node helper library from twilio.com/docs/node/install
// These consts are your accountSid and authToken from twilio.com/user/account
const accountSid = 'ACe813da4d5c69162117755494bf5f7d22';
const authToken = '9bce519bec863ea3b55b77fd4dd8af11';
const Twilio = require('twilio');
const client = new Twilio(accountSid, authToken);

client.api.calls
  .create({
    url: 'http://demo.twilio.com/docs/voice.xml',
    to: '+19377059927',
    from: '+19374585043',
  })
  .then(call => console.log(call.sid));
