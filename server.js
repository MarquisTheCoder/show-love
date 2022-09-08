
/*
 Creator: Deshawn Marquis, Williams,
 GitHub Profile: https://github.com/MarquisTheCoder,
 Date Created: 9/7/22,
 Time Created: 11:34 AM,
 File Name: server.js,
 File Description:
 */

// const twilio = require('twilio');
// const authJson = require('./auth.json');
// const fs = require('fs');
//
// /*initializes the twilio client*/
// let client = new twilio(authJson.SID, authJson.JWT);
//
//

let express = require('express');
let bodyParser = require('body-parser');
let app  = express();

/*makes the root directory for accessible files the public folder*/
app.use(express.static('public'));

/*get our server to use the body parser*/
app.use(bodyParser.json({ extended: true }));

app.listen(3000, () => {
     console.log('application is starting on port 3000');
})

/*turns send file*/
app.get('/', (req, res) => {
     res.sendFile('/Users/macbookpro/IdeaProjects/show-love/index.html');
})

app.post('/', (req, res) => {
     console.log(req.body);
})