let e={
  '476431736813912064':{report_channel_id:'733764937561800724'}
  ,'301063859702071316':{report_channel_id:'532325036858671116'}
}
let checkon=0
let mod = 'buttonsInteractionMode'
let checkpoint=false
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
module.exports.commands.command1={disable:false,aliase:'t1', run:async(client,message,args)=>{try{
   //-----SELECT
  

  
  const emb= new MessageEmbed()
	
	.addFields(
		{ name: 'Кнопки управления войсом:', value: '0'
    }
		
	)
	//.addField('Inline field title', 'Some value here', true)
//	.setImage('https://i.imgur.com/AfFp7pu.png')
	//.setTimestamp()
//	.setFooter('кнопки для управления войс чатом', 'https://i.imgur.com/AfFp7pu.png');
  //__
  
  const row = new MessageActionRow()
			.addComponents(
				new MessageSelectMenu()
					.setCustomId('select')
					.setPlaceholder('Установите кол-во участников.')
					.setMinValues(1)
					.setMaxValues(1)
					.addOptions([
            {
							label: 'не ограничено',
							description: 'Без ограничений',
							value: '100',
						},
						{
							label: '8',
							description: 'Небольшая компания',
							value: '10',
						},
						{
							label: '16',
							description: 'Большая компания',
							value: '16',
						},
						{
							label: '2',
							description: 'Тет-а-тет',
							value: '2',
						},
					]),
			);
  
  //await message.channel.send({embeds:[emb]})
  
  await message.channel.send({content:'*',embeds:[emb],"components": [row] })
  return 
  //console.log(state)

}catch(err){console.log(err);};}};//
//--------
module.exports.commands.command2={disable:false,aliase:'t2', run:async(client,message,args)=>{try{
   //-----SELECT
  

  //-----------------------
  let d = await store.in.embed.d
  //--
 // return console.log(store.d2(true).length)
  //--
  //console.log(d)
  let v2 =(state.chats&&state.chats[message.channel.id]&&state.chats[message.channel.id].val)?state.chats[message.channel.id].val:0
  let cnt = (store.d2(v2))?store.d2(v2):'описание не найдено'
  
  const emb= new MessageEmbed()
	
	.addFields(
		{ name: 'Кнопки управления войсом:', value: store.d2(v2)
    }
		
	)
	//.addField('Inline field title', 'Some value here', true)
//	.setImage('https://i.imgur.com/AfFp7pu.png')
	//.setTimestamp()
//	.setFooter('кнопки для управления войс чатом', 'https://i.imgur.com/AfFp7pu.png');
  //__
  
  let Rows = await componentRows.Rows(client,state,message.channel.id)
  
  //await message.channel.send({embeds:[emb]})
  
  await message.channel.send({content:'*',embeds:[emb],"components": Rows })
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
 if(message.content.startsWith('voiceHelp')){
   console.log('triggerde')
  return module.exports.commands.command2.run(client,message)
}
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
          
 x('ic')
           
  if(!i.isButton()) return
           
 
	
 // await i.reply({content:`Команда обрабатывается`,ephemeral: true})
 //-- Report sub interaction
   if(i.component.customId.startsWith('joinvoice')){

    let str = 'xxx$chats$'+i.component.customId+'$'+i.user.id
 
  let ch = i.guild.channels.cache.find(n=>n.name==client.x.ch.transfer)
  
  ch.send(str)
  return i.reply({content:`Команда обрабатывается`,ephemeral: true})

     
   }
 //
//030122
  if(client.client12){
let hasvoice=client.client12.rh.modules.chats.data.owners[i.user.id]
let ownerchannel=false
if(hasvoice) ownerchannel=client.client12.rh.modules.chats.data.owners[i.user.id].text_channel.id==i.channel.id
if(!hasvoice){
  return i.reply({content:`Вы не являетесь владельцем войс чата, сначала заведите себе войс чат`,ephemeral: true})
}
if(!ownerchannel){
  return i.reply({content:`Вы не являетесь владельцем этого чата`,ephemeral: true})
}
  }
//
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
    
if(sync&&sync!='resetall')      sync_row = state.chats.buttons[sync].row_name
      let syncval=v[6]
      
     //---
     let user_id=i.user.id
      let div = '$'
   
      if(sync&&sync!='resetall'){state.chats[channel_id][sync_row][sync_param]=syncval}else if(sync=='resetall'){
        state.chats[channel_id]=false
        
      }
      //----if button has sync parameter, set new value to this one
   
  
       if(sync!='resetall') state.chats[channel_id][row_name][param]=newvalue //set nev value

  //
  
  if(param=='showall'){
   // i.message.channel.send(param)
    state.chats[channel_id].val=newvalue
  }
  
  
  
  let Rows = await componentRows.Rows(client,state,i.message.channel.id)
  console.log(Rows)
  let v2 =state.chats[channel_id].val||0
  //
   
  //console.log(d)
  const emb= new MessageEmbed()
	
	.addFields(
		{ name: 'Кнопки управления войсом:', value: store.d2(v2)
    }
		
	)
  //
       if(Rows) await i.message.edit({content:'*',embeds:[emb],components:Rows})//render message

  let b2 = state.chats.getButtons(target)

 let  b = b2[param]
 x(b)
  if(b.type&&b.type=='message') {
        let filter = (message)=>{return message.author.id==i.user.id}
       let msg_arr = await i.channel.messages.fetch({limit:50}).then(collected=>{return collected})
       msg_arr= await msg_arr.filter((m)=>m.author.id==i.user.id)
        msg= msg_arr.first()
       newvalue=msg.channel.id+"."+msg.id
        //27.12
      //  if(param)
  
    if(b.needmention&&!msg.mentions.members.first()) return i.reply({content:`Нужно прислать сообщение в этот канал с упоминанием ника или роли, лалка`,ephemeral: true})
    //
     }
  if(b.report){
    
   

    //
    let voice_join_id=client.client12.rh.modules.chats.data.owners[i.user.id].voice_channel.id
    
    let voice_join = i.guild.channels.cache.get(voice_join_id)
    let invite = await voice_join.createInvite()
    .then(invite =>{

       return invite.code
      })
    .catch(console.error);
    let rep_chnl =  i.guild.channels.cache.get(e[i.guild.id].report_channel_id)
   
   // if(rep_chnl) rep_chnl.send('https://discord.gg/'+invite+'\n'+report_str)
    //
    let el = Object.assign({},b2['report'][0])
    //el.id=el.id+'|'+i.channel.id+'.'+i.user.id
    
    let button = await componentButton.Button(client,el)
    button.url = 'https://discord.gg/'+invite
    const report_row = new MessageActionRow()
			.addComponents(button)
    
      let report_str='Беседа в '+voice_join.toString()+'\n'
      x(b)
      if(msg&&msg.content&&msg.content.startsWith('.')) report_str+=msg.content.slice(1)
    //
   
    //

   if(rep_chnl) rep_chnl.send({content:report_str,"components": [report_row] })
    //
    return i.reply({content:`Команда обрабатывается`,ephemeral: true})
    //
    //let report_row= await componentRow.Row(client,state,i.message.channel.id)
    /*
    let el = Object.assign({},b2['report'][0])
    //el.id=el.id+'|'+i.channel.id+'.'+i.user.id
    el.id='joinvoice'+'$'+i.user.id
    let button = await componentButton.Button(client,el)
    const report_row = new MessageActionRow()
			.addComponents(button)
    
    let rep_chnl =  i.guild.channels.cache.get(e[i.guild.id].report_channel_id)
   if(rep_chnl) rep_chnl.send({content:report_str,"components": [report_row] })
   */
  }
 let str = 'xxx$chats$'+param+'$'+i.guild.id+'$'+i.user.id+'$'+newvalue
 
  let ch = i.guild.channels.cache.find(n=>n.name==client.x.ch.transfer)
  
  ch.send(str)
  return i.reply({content:`Команда обрабатывается`,ephemeral: true})

   
  
           
}catch(err){console.log(err);};}};//