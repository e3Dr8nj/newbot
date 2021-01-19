const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);
const Discord = require("discord.js");
let client = new Discord.Client();
client.prefix='!!';
client.SERVER_ID='476431736813912064';
//
let RH=require(`./raw.js`);
RH.folder_name=`./modules`; // RH.folder_name='C:/user/discord/bot4/modules';- for pc running
RH.prefix=client.prefix;//prefix for commands; default value: '!'
client.on("raw", (...args) => {try{
    RH.run(client,...args);
}catch(err){console.log(err)}; });//ready endclient2.on(('message')=>{};);
client.login(process.env.TOKEN)
//

