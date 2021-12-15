
let e={
  '476431736813912064':{report_channel_id:'733764937561800724'}
  ,'476431736813912064':{report_channel_id:'733764937561800724'}
}
let checkon=0
let mod = 'buttonsInteractionMode'
let checkpoint=0
let x=(checkon)?(val)=>console.log('check'+ checkpoint++ +" from "+mod+' '+val):()=>{}
const { MessageActionRow, MessageEmbed, MessageButton, MessageSelectMenu } = require('discord13.js');
const componentButton = require('./components/Button.js')
//const componentRow= require('./components/Row.js')
const componentRows= require('./components/Rows.js')

const store= require('./store.js')
let target='#target'
let state={
  
  chats:{
    getButtons:store.in.chats.getButtons,
    
    'buttons':{}
    ,rows:{}
    /*
   , '1':{
      rows:{}
      //,baseRow2:[['lock','0'],['lecture','0'],['textlock','0']]
      //,baseRow:{lock:0,lecture:0,textlock:0}
    }
    */
  }
}
let baseRow = {lock:0,lecture:0,textlock:0}

//----
exports.rh={
  //disable:true//uncomment for disable all this file
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

//--------
module.exports.commands.command2={disable:false,aliase:'t2', run:async(client,message,args)=>{try{
   //--
  x()
 // return
  let d = store.in.embed.d
  //console.log(d)
  const emb= new MessageEmbed()
	
	.addFields(
		{ name: 'Кнопки для управления войс чатом', value: d
    },
		{ name: '\u200B', value: '\u200B' },
		
	)
	//.addField('Inline field title', 'Some value here', true)
//	.setImage('https://i.imgur.com/AfFp7pu.png')
	//.setTimestamp()
//	.setFooter('кнопки для управления войс чатом', 'https://i.imgur.com/AfFp7pu.png');
  //__
  let Rows = await componentRows.Rows(client,state,message.channel.id)
  
  await message.channel.send({embeds:[emb]})
  await message.channel.send({content:'test',"components": Rows })
  return 
  //console.log(state)

}catch(err){console.log(err);};}};//

//_________________________________________BOOTS_PART___________________________________________________

module.exports.boots = {}; 
module.exports.boots.someBoot1={disable:false,run:async(client)=>{try{
    //code to execut bot on loading
}catch(err){console.log(err);};}};//
//_________________________________________EVENTS_PART_________________________________________________
 module.exports.events={};
module.exports.events.messageCreate={ disable:false,run:async(client,message)=>{try{
 //code to execut then this event triggered
}catch(err){console.log(err);};}};//
//_________________________________________INTERACTION_PART_________________________________________________


//___
//______________________________EVENTS PRIMITIVE
module.exports.events_primitive={};
module.exports.events_primitive.SOME_EVENT_NAME={disable:false,run:async(client,event)=>{try{
      //some code here
}catch(err){console.log(err);};}};//
//_____________SUB FUNCTION

exports.s0=async(client)=>{
try{ 
 
  

}catch(err){console.log(err);};
};//
//___
exports.s1=async(client)=>{
try{ 
   
}catch(err){console.log(err);};
};//


//_________________________________________INTERACTION_PART_________________________________________________
//module.exports.events={};

module.exports.events.interactionCreate={ disable:false,run:async(client,i)=>{try{
 //code to execut then this event triggered
  //return
           console.log('it___________________________-')
 
            console.log('but int')
 x('ic')
           
           if(!i.isButton()) return
           
 
	
  await i.reply({content:`${i.user.tag} ${i.customId}`,ephemeral: true})

  let BaseRow,PermsRow={}
  
     let msg ={}
     let v = i.component.customId.split('$')//chat$8990$lock$0$1
     let channel_id=v[1]
     let target=v[0]
     let param = v[2]
     let row_name=param.split('.')[0]
     param = param.split('.')[1]
     let curvalue=Number(v[3])
     let newvalue = Number(v[4])
     //---041221
      let sync=v[5]
      let sync_row=''
      let sync_param=sync
      //
      
if(sync)      sync_row = state.chats.buttons[sync].row_name
      let syncval=v[6]
      
     //---
     let user_id=i.user.id
      let div = '$'
    
      if(sync){state.chats[channel_id][sync_row][sync_param]=syncval} //----if button has sync parameter, set new value to this one
   
  
  state.chats[channel_id][row_name][param]=newvalue //set nev value

  
  
  let Rows = await componentRows.Rows(client,state,i.message.channel.id)
       if(Rows) await i.message.edit({components:Rows})//render message

  let b2 = state.chats.getButtons(target)

 let  b = b2[param]
 x(b)
  if(b.type&&b.type=='message') {
        let filter = (message)=>{return message.author.id==i.user.id}
       let msg_arr = await i.channel.messages.fetch({limit:50}).then(collected=>{return collected})
       msg_arr= await msg_arr.filter((m)=>m.author.id==i.user.id)
        msg= msg_arr.first()
       newvalue=msg.channel.id+"."+msg.id
        
     }
  if(b.report){
    
    let report_str='Конструктивная беседа\n'
    x(b)
    if(msg&&msg.content) report_str+=msg.content
    //let report_row= await componentRow.Row(client,state,i.message.channel.id)
    
    let el = Object.assign({},b2['report'][0])
    el.id=el.id+'|'+i.channel.id+'.'+i.user.id
    
    let button = await componentButton.Button(client,el)
    const report_row = new MessageActionRow()
			.addComponents(button)
    
    let rep_chnl =  i.guild.channels.cache.get(e[i.guild.id].report_channel_id)
   if(rep_chnl) rep_chnl.send({content:report_str,"components": [report_row] })
  }
 let str = 'xxx$chats$'+param+'$'+i.guild.id+'$'+i.user.id+'$'+newvalue
 
  let ch = i.guild.channels.cache.find(n=>n.name==client.x.ch.transfer)
  
  ch.send(str)
  return 

   
  
           
}catch(err){console.log(err);};}};//