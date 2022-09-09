
require('dotenv').config();
/*
 Creator: Deshawn Marquis, Williams,
 GitHub Profile: https://github.com/MarquisTheCoder,
 Date Created: 9/7/22,
 Time Created: 11:34 AM,
 File Name: server.js,
 File Description:
 */


/*initializes the twilio client*/
let accountSid= process.env.TWILIO_ACC_SID;
let authToken = process.env.TWILIO_ACC_JWT;


let express = require('express');
let bodyParser = require('body-parser');

const client = require('twilio')(accountSid, authToken);
// client.logLevel = 'debug';

function sendTextMessage(from, to, body){
     client.messages.create({
          body: body, from: from, to: '+1' + to,
     }).then(message => console.log(body))
       .catch(error => console.log(error))
}
let app  = express();

/*makes the root directory for accessible files the public folder*/
app.use(express.static('public'));

/*get our server to use the body parser*/
app.use(bodyParser.urlencoded({extended: true}));

app.listen(3000, () => {
     console.log('application is starting on port 3000');
})

/*turns send file*/
app.get('/', (req, res) => {
     res.sendFile('/Users/macbookpro/IdeaProjects/show-love/index.html');
})

app.post('/', (req, res) => {
     console.log(req.body + '\n\n');
     console.log('sending message to ' + '+' + req.body.phone_number);
     sendTextMessage('+18146125149',
                     req.body.phone_number,
                     req.body.choice);
     res.sendFile('/Users/macbookpro/IdeaProjects/show-love/index.html');
})