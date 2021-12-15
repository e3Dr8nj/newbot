
const { Client,ContexMenuInteraction } = require('discord13.js');
exports.rh={
 // disable:,true//uncomment for disable all this file
 // commands:{disable:true} //uncomment fro disable commands etc.
  //,boots:{disable:true}
  //,events:{disable:true}
  //,events_primitive:{disable:true}
                   
};

//________________________________________TOOLS__________________________________________
let delay=async(duration)=>{await new Promise(resolve=>setTimeout(resolve,duration))}; 
     //* for delay inside async function, use it instead setTimeout
let random =(max)=>{ return Math.floor(Math.random()*max);};




//___________________________ETERNAL_VARIABLE_PART
module.exports.e={
 mod_info:{
   code_name:'rh00'
   ,aliase_name:'template'
 } 
};


//_________________________________________COMMANDS_PART_________________________________________________
module.exports.commands = {};
//--------
module.exports.commands.command1={disable:false,aliase:'bc', run:async(client,message,args)=>{try{
   //code to execut then this command triggered
  //

  let guild = client.guilds.cache.get(client.SERVER_ID)
  let commands
  if(guild){
   commands = guild.commands
}else{
   commands = client.application?.commands
}
  // commands = client.application?.commands
  /*
client.application.commands.set([
  {
    name: 'test',
    description: 'A test command',
  },
  {
    name: 'testmenu2'
    ,type:2
  },
])
  .then(console.log)
  .catch(console.error);

*/
  
 commands.create({
    name:'user'
  // ,description:'get user avatar'
   ,type:2


})


  //message.reply('pong')
}catch(err){console.log(err);};}};//
//--------
module.exports.commands.command2={disable:false,aliase:'cmd2', run:async(client,message,args)=>{try{
   //code to execut then this command triggered
}catch(err){console.log(err);};}};//

//_________________________________________BOOTS_PART___________________________________________________

module.exports.boots = {}; 
module.exports.boots.someBoot1={disable:false,run:async(client)=>{try{
    //code to execut bot on loading
}catch(err){console.log(err);};}};//
//_________________________________________EVENTS_PART_________________________________________________
module.exports.events={};
module.exports.events.message={ disable:false,run:async(client,message)=>{try{
 //code to execut then this event triggered
   return
 if(message.content.startsWith('zzz')){
//zzz$cmd$member_id$target_id
    message.reply('o')
               let props = message.content.split('$')
               let cmd = props[1]
               let member_id=props[2]
               let target_id = props[3]
            let action={}
                
                action.guild = message.guild
                action.channel = message.channel
                action.member = message.guild.members.cache.get(member_id)
                action.target = message.guild.members.cache.get(target_id)
               console.log(action)
           }
  return
}catch(err){console.log(err);};}};//

//______________________________EVENTS PRIMITIVE
module.exports.events_primitive={};
module.exports.events_primitive.SOME_EVENT_NAME={disable:false,run:async(client,event)=>{try{
      //some code here
}catch(err){console.log(err);};}};//
//_____________SUB FUNCTION
exports.subFunction1=async(client)=>{
try{ 
   
}catch(err){console.log(err);};
};//
/*
module.exports.events.interactionCreate={ disable:false,run:async(client,interaction)=>{try{
 //code to execut then this event triggered
  //return
          if(interaction.isButton()) return
      
          // if(!interaction.isCommand()) return
  console.log('dd________________________')
    console.log(interaction)
  const {commandName, options} = interaction
  console.log(commandName)
  
if(commandName === 'ping'){
  
    await interaction.reply({content:`pong`,ephemeral: true})
}
  if(commandName === 'getUserAvatar7'){
//  console.log(interaction)
    await interaction.reply({content:"you click it!"})
    let pref = 'xxx'
    let div='.'
    let module='chats'
    let cmd = 'mute'
    let guild_id = interaction.guild.id
    let owner_id= interaction.user.id
    let member_id = interaction.targetId
    interaction.channel.send(pref+div+module+div+cmd+div+guild_id+div+owner_id+div+member_id)
    
    //interaction.reply({content:pref+div+module+div+cmd+div+guild_id+div+owner_id+div+member_id,ephemeral:true})
    //------------
    
    //---------------
}
           
}catch(err){console.log(err);};}};//

*/
module.exports.events.messageCreate={ on:true,run:async(client,message)=>{try{
  //---
  if(message.content.startsWith('zzz')){
//zzz$cmd$member_id$target_id
    message.reply('ok')
               let props = message.content.split('$')
               let cmd = props[1]
               let member_id=props[2]
               let target_id = props[3]
            let action={}
                
                action.guild = message.guild
                action.channel = message.channel
                action.member = message.guild.members.cache.get(member_id)
                action.target = message.guild.members.cache.get(target_id)
               console.log(action)
               return
           }
  
  
  //----------
    if(message.content.startsWith('xxx')) message.reply('ok')

if(message.content.startsWith('xxx.chats.mute')){
//$chats$mute$guild_id$owner_id$member_id
  let obj = {}
      let mc = message.content
     obj.props = message.content.split(".")
     obj.module_name = mc[1]
     obj.command_name = mc[2]
     obj.guild_id= mc[3]
     obj.owner_id=mc[4]
     obj.member_id=mc[5]
  console.log(obj)
}




}catch(err){console.log(err);};}};//

//---

module.exports.events.interactionCreate={ disable:false,run:async(client,interaction)=>{try{
 //code to execut then this event triggered
  //return
          if(interaction.isButton()) return
          
      
          // if(!interaction.isCommand()) return
  console.log('dd________________________')
    console.log(interaction)
  const {commandName, options} = interaction
  console.log(commandName)
  
    let pref = 'xxx'
    let div='$'
    let module='chats'
    let str='.'
    let guild_id = interaction.guild.id
    let owner_id= interaction.user.id
    let member_id = interaction.targetId
    let mmb = interaction.guild.members.cache.get(member_id)
    let cmd =''
  if(commandName === '☥Забанить'){
  
     cmd = 'ban'
    str = 'Забанен'
  }
  if(commandName === '☥Обнулить'){
  
    
   
    cmd = 'null'
    str = 'Обнулен'
    
   
  }
   if(commandName === '☥Дать ключ'){
  
  
    
    cmd = 'key'
    str = 'Ключ доступа в закрытый войс выдан'
   
  }if(commandName === '☥Дать микрофон'){
  
  
   
    cmd = 'micro' 
    str='Микрофон, позволяющий говорить учатнику, при активированном режиме "Тиховсе"'
  }
     await interaction.channel.send(pref+div+module+div+cmd+div+guild_id+div+owner_id+div+member_id)
      return interaction.reply({content:str+": "+mmb.toString(),ephemeral:true})       
}catch(err){console.log(err);};}};//



