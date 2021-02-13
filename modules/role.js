
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
  mmb_limit:30
  ,limit:60
  ,bot_name:'tea'
  ,mmb:{}
  ,roles:{
    '734089682283004024':0
    ,'807006473858973796':0
  }
  ,roles_arr:['Сумеречные','Странники','☥']
}

//_________________________________________BOOTS_PART___________________________________________________
module.exports.boots = {}; 

module.exports.boots.someBoot={run:async(client)=>{try{
    //code to execut bot on loading
   
 
}catch(err){console.log(err);};}};//
//module.exports.boots.someBoot.RH_IGNORE=true;//add this line to ignore this command
//...
//_________________________________________COMMANDS_PART_________________________________________________
module.exports.commands = {};


//module.exports.commands.someCommand.RH_IGNORE=true;//add this line to ignore this command
// ...
module.exports.commands.x000_cmd0={aliase:'выдать', run:async(client,message,args)=>{try{
   //code to execut then this command triggered
  if(args[1]=="роль"){
    //check if mmb has roles
    //message.channel.send('ok');
   let member = message.member;
   let is_able= await member.roles.cache.find(r=>exports.e.roles_arr.includes(r.name)||member.user.id==message.channel.guild.owner.id);
   
    if(!is_able) return message.channel.send('Недостаточно прав!');
  let now = new Date().getTime();
    //--
if(exports.e.mmb[member.user.id]){
let lastTime = exports.e.mmb[member.user.id];

let tag0 = now - lastTime; 
    let n0 = Number(module.exports.e.mmb_limit);
    let limit0 = n0*1000*60;
if(tag0 < limit0) return message.channel.send('Можешь воспользовать командой через '+Math.round((limit0-tag0)/1000/60)+' минут (личный таймаут)');
};
  //---

  let lessTime = [];
  for (let key in exports.e.roles){
     if(lessTime.length==0) lessTime = [key,exports.e.roles[key]];
     if(exports.e.roles[key]<lessTime[1]) lessTime=[key,exports.e.roles[key]];
  }
   
let tag = now - lessTime[1]; 
     let n = Number(module.exports.e.limit);
    let limit = n*1000*60;
if(tag < limit) return message.channel.send('Можешь воспользовать командой через '+Math.round((limit-tag)/1000/60)+' минут');
    //let ROLE_ID = '807350473862021140';
   // let ROLE_ID = '807006473858973796';
    let role = message.guild.roles.cache.get(lessTime[0]);
    if(!role) return;
    let rsv_mmb= message.mentions.members.first();
    if(!rsv_mmb) return message.channel.send("Не указан счастливый обладатель роли");
       if(message.mentions.members.size>1) return message.channel.send("Указать можно только одного.");
//-----
   let role_name0 = args.slice(2).join(" ");
    let patt1 = /<\@!?\d+>/g;
   let role_name = role_name0.replace(patt1,' ').trim();
    let bool = false;
    let ss=" ឵ ឵  ";
    if(!!role_name) await role.edit({name:role_name+ss}).catch(err=>{bool=true;message.reply('Слишком длинное название');});
   
    if(bool) return; 
    await role.members.map(m=> m.roles.remove(role).catch(err=>console.log(err)) );
    await rsv_mmb.roles.add(role).then(x=>message.channel.send('Роль выдана')).catch(err=>console.error(err));
     exports.e.roles[role.id]=now;//
    exports.e.mmb[member.user.id]=now;
  }
//--
//__ 
}catch(err){console.log(err);};}};//
//module.exports.commands.someCommand.RH_IGNORE=true;//add this line to ignore this command

module.exports.commands.x000_cmd1={aliase:'x000', run:async(client,message,args)=>{try{
   if(args[1]&&!args[2]) {
     if(exports.e[args[1]]) message.channel.send(exports.e[args[1]]);
   };
  if(args[1]&&args[2]) {
     if(exports.e[args[1]]) message.channel.send(exports.e[args[1]]);
     exports.e[args[1]] = args[2]; message.channel.send(exports.e[args[1]]);
   };
  
}catch(err){console.log(err);};}};//
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

