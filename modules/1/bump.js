exports.rh={
  disable:true,
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
};


//_________________________________________COMMANDS_PART_________________________________________________
module.exports.commands = {};
//--------
module.exports.commands.command1={disable:false,aliase:'bump', run:async(client,message,args)=>{try{
   //code to execut then this command triggered
  module.exports.parseTextChannels.run(client)
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

let channel_id='733764937561800724'
let index = 'test'
module.exports.parseTextChannels={run:async(client)=>{try{
 
  let msg_arr= await client.channels.cache.get(channel_id).messages.fetch({limit:100}).then(messages => {
             let msgs =  messages.filter(m=>m.content.indexOf(index)!=-1);
              return msgs;
         }).catch(console.error);
  
 let obj;
 msg_arr=msg_arr.array();
   msg_arr.map(ch=>{
 console.log(ch.content);
     if(ch.content.indexOf('{')==-1||ch.content.indexOf('}')==-1) return;
     let data1 = JSON.parse(ch.content.trim());
     let data2 = JSON.parse(ch.content.trim());
     //console.log(data1);
     let msg_id=ch.id;
    // ch.id=data1.text_id;
     let text_id=data1.text_id;
     if(exports.text_channels[text_id]) return  console.log('has');
     if(data1){
     
       obj=data1;
       
      };
     });
  console.log(obj)
   return;

}catch(err){console.log(err);};}};//