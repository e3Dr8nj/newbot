exports.rh={
  disable:false,
  commands:{disable:false},
  boots:{disable:true},
  events:{disable:true},
  events_primitive:{disable:true}
};
//________________________________________TOOLS__________________________________________
let delay=async(duration)=>{await new Promise(resolve=>setTimeout(resolve,duration))}; 
     //* for delay inside async function, use it instead setTimeout
let random =(max)=>{ return Math.floor(Math.random()*max);};



//_________________PART MANAGER (OPCIONAL)
module.exports.active=true;//for previous rh_handler version(true=module on/false=module off);
//exports.RH_IGNORE_TOTAL=true;//add this line to ignore this module 
//exports.RH_IGNORE_COMMANDS=true;//add this line to ignore all commands from this module
//module.exports.RH_BOOTS=true;//add this line to ignore all boots from this module
//module.exports.RH_IGNORE_EVENTS=true;//add this line to ignore all events from this module
//module.exports.RH_IGNORE_EVENTS_PRIMITIVE=true;//add this line to ignore all events_primitive from this module


//___________________________ETERNAL_VARIABLE_PART
module.exports.e={
  bot_name:'tea'
  ,bot_info:' чай'
}

//_________________________________________BOOTS_PART___________________________________________________
module.exports.boots = {}; 

module.exports.boots.someBoot={run:async(client)=>{try{
    //code to execut bot on loading
    client.storage={};
    client.storage.emojis={
 
};
//___
//await client.guilds.fetch();
client.guilds.cache.map(g=>g.emojis.cache.forEach(emoji => {
 //let aliase = emoji.animated?emoji.name+"_":emoji.name;
 if(client.storage.emojis[emoji.name]&&!!client.storage.emojis[emoji.name].animated) return;
 client.storage.emojis[emoji.name]={};
 client.storage.emojis[emoji.name].id=emoji.id;client.storage.emojis[emoji.name].server_id=g.id;
 client.storage.emojis[emoji.name].name=emoji.name;
 client.storage.emojis[emoji.name].animated=emoji.animated;
 client.storage.emojis[emoji.name].string=emoji.animated?'<a:'+emoji.name+':'+emoji.id+'>':'<:'+emoji.name+':'+emoji.id+'>';
 
 })

);
//___
 
}catch(err){console.log(err);};}};//
//module.exports.boots.someBoot.RH_IGNORE=true;//add this line to ignore this command
//...
//_________________________________________COMMANDS_PART_________________________________________________
module.exports.commands = {};

module.exports.commands.cmd1={disable:false,aliase:'+', run:async(client,message,args)=>{try{
   //code to execut then this command triggered
  //if(client.storage.emojis[args[1]]) message.channel.send(client.storage.emojis[args[1]]);
  //___
 await message.delete().catch(err=>console.log(err));   
 let msg= await message.channel.messages.fetch({limit:15}).then(messages => {
 let msg1= messages.find(m=>{
 // return (m.reactions.cache.has('✅'))&&m.reactions.cache.get('✅').users.fetch().then(us=>{return us.has(message.author.id)});
 return (m.reactions.cache.find(r=>r.users.fetch().then(us=>{return us.has(message.author.id)}) ) );


 });//
 
 return msg1;
 }).catch(console.error);

if(msg&&client.storage.emojis[args[1]]) {
 let reaction = await msg.react(client.storage.emojis[args[1]].id);
 await delay(5000);
 await reaction.users.remove(client.user);
};
//---
}catch(err){console.log(err);};}};//
//module.exports.commands.someCommand.RH_IGNORE=true;//add this line to ignore this command
// ...
module.exports.commands.cmd2={aliase:'эмоджи', run:async(client,message,args)=>{try{
   //code to execut then this command triggered
   let str = ""; let str_a=""; let cnt=0; let cnt_a=0;
 for (let key in client.storage.emojis){
 let value = client.storage.emojis[key]; 
 if(!value.animated&&value.server_id==message.guild.id) continue;
 if(!!value.animated){
 str_a+=value.string; cnt_a++;
 if(cnt_a==30) { message.channel.send(str_a); cnt_a=0; str_a='';};
 }else{ 
 str+=value.string; cnt++;
 if(cnt==30) { message.channel.send(str); cnt=0; str='';};
 };
 };
//__
 if(str_a.length!=0) {message.channel.send(str_a);} ;
 if(str.length!=0) {message.channel.send(str);} ; 
//__ 
}catch(err){console.log(err);};}};//
//module.exports.commands.someCommand.RH_IGNORE=true;//add this line to ignore this command


//_________________________________________EVENTS_PART_________________________________________________
module.exports.events={};

module.exports.events.message={ on:true,run:async(client,message)=>{try{
 //
}catch(err){console.log(err);};}};//
//module.exports.events.someEvent.RH_IGNORE=true;//add this line to ignore this event trigger
// ...



 
//_________________________________________EVENTS_PART_END__________________________________________

//______________________________EVENTS PRIMITIVE
module.exports.events_primitive={};

module.exports.events_primitive.SOME_EVENT_NAME={run:async(client,event)=>{try{
      //some code here
}catch(err){console.log(err);};}};//
//module.exports.events_primitive.SOME_EVENT_NAME.RH_IGNORE = true;//add this line to ignore this primitive event trigger

//_____________SUB FUNCTION
//______________sf01
exports.sf01=async(client)=>{
try{ 
   
}catch(err){console.log(err);};
};//createRole end

