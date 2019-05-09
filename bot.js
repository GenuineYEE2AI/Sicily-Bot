/*
 * Discord Bot Builder Bot
 * Version 1.2.0
 * Robert Borghese
 */

const DBM = {};
const DiscordJS = DBM.DiscordJS = require('discord.js');
const express = require('express');
const keepalive = require('express-glitch-keepalive');

const app = express();

app.use(keepalive);

app.get('/', (req, res) => {
res.json('This bot should be online! Uptimerobot will keep it alive');
});
app.get("/", (request, response) => {
response.sendstatus(200);
});
app.listen(process.env.PORT)

const Files = require(require('path').join(__dirname, 'js', 'Main.js')).Files;

if(!process.send) {

Files.initStandalone();

} else {

process.on('message', function(content) {
	Files.initBotTest(content);
});

}