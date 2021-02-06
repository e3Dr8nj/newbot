
exports.rh={
  disable:false,
  commands:{disable:false},
  boots:{disable:false},
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
  ,roles_arr:['Сумеречные','Странники']
}

//_________________________________________BOOTS_PART___________________________________________________
module.exports.boots = {}; 

module.exports.boots.someBoot={run:async(client)=>{try{
    //code to execut bot on loading
    client.role = {};
client.role.lastTime=0;
 
}catch(err){console.log(err);};}};//
//module.exports.boots.someBoot.RH_IGNORE=true;//add this line to ignore this command
//...
//_________________________________________COMMANDS_PART_________________________________________________
module.exports.commands = {};

module.exports.commands.cmd1={disable:false,aliase:'+', run:async(client,message,args)=>{try{
   //code to execut then this command triggered
  //if(client.storage.emojis[args[1]]) message.channel.send(client.storage.emojis[args[1]]);

}catch(err){console.log(err);};}};//
//module.exports.commands.someCommand.RH_IGNORE=true;//add this line to ignore this command
// ...
module.exports.commands.cmd2={aliase:'выдать', run:async(client,message,args)=>{try{
   //code to execut then this command triggered
  if(args[1]=="роль"){
    //check if mmb has roles
    //message.channel.send('ok');
   let member = message.member;
   let is_able= await member.roles.cache.find(r=>exports.e.roles_arr.includes(r.name)||member.user.id==message.channel.guild.owner.id);
   
    if(!is_able) return message.channel.send('Недостаточно прав!');
    let now = new Date().getTime();
let tag = now - client.role.lastTime; 
    let limit = 60*1000*60;
if(tag < limit) return message.channel.send('Можешь воспользовать командой через '+Math.round((limit-tag)/1000/60)+' минут');
    
   // let ROLE_ID = '807350473862021140';
    let ROLE_ID = '807006473858973796';
    let role = message.guild.roles.cache.get(ROLE_ID);
    if(!role) return;
    let rsv_mmb= message.mentions.members.first();
    if(!rsv_mmb) return message.channel.send("Не указан счастливый обладатель роли");
//    let rsv_mmb = message.guild.members.chache.get(rsv_id);
 
    let role_name = args.slice(3).join(" ");
    let bool = false;
    if(!!role_name) await role.edit({name:role_name}).catch(err=>{bool=true;message.reply('Слишком длинное название');});
    //role_name=role_name?role_name:role.name;
    //console.log(role_name);
    if(bool) return; 
    await role.members.map(m=> m.roles.remove(role).catch(err=>console.log(err)) );
    await rsv_mmb.roles.add(role).then(x=>message.channel.send('Роль выдана')).catch(err=>console.error(err));
     client.role.lastTime=now;//
};
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

