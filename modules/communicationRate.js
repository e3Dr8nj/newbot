
exports.rh={
  //disable:true,
  commands:{disable:false},
  boots:{disable:true},
  events:{disable:true},
  events_primitive:{disable:true}
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
  ,time_rate:60*1000
  ,amount_rate:3
  ,dump_rate:-20
};


//_________________________________________COMMANDS_PART_________________________________________________
module.exports.commands = {};
//--------
module.exports.commands.command1={disable:false,aliase:'cmd1', run:async(client,message,args)=>{try{
   //code to execut then this command triggered
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
  if(message.channel.type=='dm'||message.author.bot) return;
     module.exports.sf3.run(client,message);
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


module.exports.sf3={ run:async(client,message)=>{try{
    //code to execut then event occurs
  if(message.author.bot) return;
  let channel_id=message.channel.id;
   console.log(message.content);
  if(!client.guild1){client.guild1={}};
if(!client.guild1[channel_id]){client.guild1[channel_id]={
   last_message_time:0
   ,communication_rate:0
   
};};

 let time_before= client.guild1[channel_id].last_message_time;
  
  let this_time=new Date().getTime();
  let tag = this_time-time_before;
  console.log(tag);
  let rate = module.exports.e.time_rate;
  let inc = (tag<rate)?1:-1;
  console.log(inc);
  client.guild1[channel_id].communication_rate=client.guild1[channel_id].communication_rate+inc;
if(client.guild1[channel_id].communication_rate>module.exports.e.amount_rate){
   message.channel.send('Новый год пришол!!! <:nichosi:625116176212688917>');
   client.guild1[channel_id].communication_rate=module.exports.e.dump_rate;
};
  client.guild1[channel_id].last_message_time=this_time;
  console.log(client.guild1);
}catch(err){console.log(err);};}};//