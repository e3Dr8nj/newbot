

const http = require("http");
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);
/*
const Discord = require("discord.js");
const { Client, Collection } = require("discord.js");
const { Intents } = require('discord.js');

const client = new Client({
    disableEveryone: true,
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_BANS, Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS, Intents.FLAGS.GUILD_INTEGRATIONS, Intents.FLAGS.GUILD_WEBHOOKS, Intents.FLAGS.GUILD_INVITES, Intents.FLAGS.GUILD_VOICE_STATES, Intents.FLAGS.GUILD_PRESENCES, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS, Intents.FLAGS.GUILD_MESSAGE_TYPING, Intents.FLAGS.DIRECT_MESSAGES, Intents.FLAGS.DIRECT_MESSAGE_REACTIONS, Intents.FLAGS.DIRECT_MESSAGE_TYPING],
});
client.prefix = "!!";
client.SERVER_ID = "476431736813912064";
//
let RH = require(`./raw.js`);
RH.folder_name = `./modules`; // RH.folder_name='C:/user/discord/bot4/modules';- for pc running
RH.prefix = client.prefix; //prefix for commands; default value: '!'
//RH.fetch_messages=true
RH.fetch_members=true
//RH.build(client)
client.login(process.env.TOKEN);
//------------------------
*/
const Discord13= require("discord13.js")
const {Intents:Intents13}= require("discord13.js")
const client13 = new Discord13.Client({
    disableEveryone: true
   //,intents:[Intents13]
   ,intents: [Intents13.FLAGS.GUILDS
             , Intents13.FLAGS.GUILD_MEMBERS, Intents13.FLAGS.GUILD_BANS, Intents13.FLAGS.GUILD_EMOJIS_AND_STICKERS, Intents13.FLAGS.GUILD_INTEGRATIONS, Intents13.FLAGS.GUILD_WEBHOOKS, Intents13.FLAGS.GUILD_INVITES, Intents13.FLAGS.GUILD_VOICE_STATES, Intents13.FLAGS.GUILD_PRESENCES, Intents13.FLAGS.GUILD_MESSAGES, Intents13.FLAGS.GUILD_MESSAGE_REACTIONS, Intents13.FLAGS.GUILD_MESSAGE_TYPING, Intents13.FLAGS.DIRECT_MESSAGES, Intents13.FLAGS.DIRECT_MESSAGE_REACTIONS, Intents13.FLAGS.DIRECT_MESSAGE_TYPING
             ],
});
//client13.prefix = "-";
client13.SERVER_ID = "476431736813912064";

let RH13 = require(`./raw.js`);
RH13.folder_name = `./modules`; // RH.folder_name='C:/user/discord/bot4/modules';- for pc running
//RH13.prefix = client13.prefix; //prefix for commands; default value: '!'
RH13.build(client13)

client13.x={
  ch:{
    transfer:'transfer'
    ,log_id:'733764937561800724'
  }
}
client13.x.inputPrefix='x13'
client13.x.rewirePrefix='rewx13'
client13.login(process.env.TOKEN);

client13.on('ready',guild=>{
//let channelError= client13.guilds.cache.get(client13.SERVER_ID).channels.cache.find(ch=>ch.name=='error')
  let channelError= client13.channels.cache.find(ch=>ch.name=='error')
  let consolelog = console.log
  console.log=(data)=>{
  if((data.data||data.message)&&channelError) {
    let ndata = data.toString()
    if(ndata.length>1) channelError.send(ndata)
  }
   consolelog(data)}
    })
