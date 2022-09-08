
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
let sid = process.env.TWILIO_ACC_SID;
let jwt = process.env.TWILIO_ACC_JWT;

console.log(sid);
console.log(jwt);
const client = require('twilio')(sid, jwt);

let express = require('express');
let bodyParser = require('body-parser');
let app  = express();

/*makes the root directory for accessible files the public folder*/
app.use(express.static('public'));

/*get our server to use the body parser*/
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, () => {
     console.log('application is starting on port 3000');
})

/*turns send file*/
app.get('/', (req, res) => {
     res.sendFile('/Users/macbookpro/IdeaProjects/show-love/index.html');
})

app.post('/', (req, res) => {
     console.log(req.body);
     res.send('ok');
     client.messages.create({
               body: req.body['words-of-encouragement'],
               from: '+18146125149',
               to: `+${req.body['phone_number']}`
                  })
          .then(message => console.log(req.body))
})