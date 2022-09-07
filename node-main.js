
/*
 Creator: Deshawn Marquis, Williams,
 GitHub Profile: https://github.com/MarquisTheCoder,
 Date Created: 9/7/22,
 Time Created: 11:34 AM,
 File Name: node-main.js,
 File Description:
 */

const twilio = require('twilio');
const authJson = require('./auth.json');
const fs = require('fs');

/*initializes the twilio client*/
let client = new twilio(authJson.SID, authJson.JWT);



