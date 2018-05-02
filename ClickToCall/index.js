// Download the Node helper library from twilio.com/docs/node/install
// These consts are your accountSid and authToken from twilio.com/user/account
const accountSid = '';
const authToken = '';
const Twilio = require('twilio');
const client = new Twilio(accountSid, authToken);

client.api.calls
  .create({
    url: 'http://demo.twilio.com/docs/voice.xml',
    to: '+',
    from: '+',
  })
  .then(call => console.log(call.sid));
