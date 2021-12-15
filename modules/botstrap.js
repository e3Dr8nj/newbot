
exports.rh={
disable:true
//  commands:{disable:false},
//  boots:{disable:true},
 // events:{disable:true},
 // events_primitive:{disable:true}
};

//________________________________________TOOLS__________________________________________
let delay=async(duration)=>{await new Promise(resolve=>setTimeout(resolve,duration))}; 
     //* for delay inside async function, use it instead setTimeout
let random =(max)=>{ return Math.floor(Math.random()*max);};




//___________________________ETERNAL_VARIABLE_PART
module.exports.e={
  traprole:'Мертвые души'
 ,mod_info:{
   code_name:'rh00'
   ,aliase_name:'template'
 } 
};


//_________________________________________COMMANDS_PART_________________________________________________
module.exports.commands = {};
//--------
/*
module.exports.commands.command1={disable:false,aliase:'trap', run:async(client,message,args)=>{try{
   //code to execut then this command triggered
  let trapRole = message.channel.guild.roles.cache.find(n=>n.name==module.exports.e.traprole).catch(err=>{})
trapRole.members.map(m=>console.log(m.user.id))
  let str = 'В ботоловушке:'
  trapRole.members.map(m=>str+='\n '+m.toString())
message.channel.send(str).catch(err=>{})
}catch(err){console.log(err);};}};//
//--------
module.exports.commands.command3={disable:false,aliase:'banbots', run:async(client,message,args)=>{try{
   //code to execut then this command triggered
  let trapRole = message.channel.guild.roles.cache.find(n=>n.name==module.exports.e.traprole)
trapRole.members.map(m=>console.log(m.user.id))
  let str = 'В ботоловушке:'
  trapRole.members.map(m=>str+='\n '+m.toString())
message.channel.send(str).catch(err=>{})
  trapRole.members.map(m=>{
      m.user.send('hi').then(message.channel.send(m.toString()+' забанен')).catch(err=>{})
  })
}catch(err){console.log(err);};}};//
module.exports.commands.command2={disable:false,aliase:'cmd2', run:async(client,message,args)=>{try{
   //code to execut then this command triggered
}catch(err){console.log(err);};}};//
*/

//_________________________________________BOOTS_PART___________________________________________________

module.exports.boots = {}; 
module.exports.boots.someBoot1={disable:false,run:async(client)=>{try{
    //code to execut bot on loading
}catch(err){console.log(err);};}};//
//_________________________________________EVENTS_PART_________________________________________________
module.exports.events={};
module.exports.events.message={ disable:false,run:async(client,message)=>{try{
   //---
 console.log(message)
let member = message.member
let guild = message.guild
//--

if(!client.trap){
client.trap={}
client.trap={lastComeTime:0,members_ids:[],count:0}
}

let time = new Date().getTime()
let tag = time - client.trap.lastComeTime
let traptag = 1000
let tagSmall = tag<traptag
let trapRole = await guild.roles.cache.find(n=>n.name==module.exports.e.traprole)
if(!trapRole) return
client.trap.members_ids.push(member.user.id)

if(tagSmall){
   console.log('tag is small, bot in trap')
   
   client.trap.count++
      if(client.trap.count==3){
          
          client.trap.members_ids.map(m=>guild.members.cache.get(m).roles.add(trapRole).catch(err=>{console.log(err)}))
       }else if(client.trap.count>3){
          member.roles.add(trapRole).catch(err=>{console.log(err)})
       }
}else{ 
   console.log('big tag')
  client.trap.members_ids=[]
  client.trap.count=0

}
  console.log(client.trap)
return client.trap.lastComeTime = time
  
  
  //code to execut then this event triggered
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

