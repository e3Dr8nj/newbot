//
let store={
  
  chats:{
    '1':{
      rows:{}
      ,baseRow2:[['lock','0'],['lecture','0'],['textlock','0']]
      ,baseRow:{lock:0,lecture:0,textlock:0}
    }
  }
}
let baseRow = {lock:0,lecture:0,textlock:0}
const { MessageActionRow, MessageEmbed, MessageButton, MessageSelectMenu } = require('discord13.js');
//----
exports.rh={
  disable:true//uncomment for disable all this file
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
module.exports.commands.command2={disable:false,aliase:'testb', run:async(client,message,args)=>{try{
   //code to execut then this command triggered
  
//const row = await module.exports.buildRow(client,[['lock','0'],['lecture','0'],['textlock','0']])
  const row = await module.exports.BaseRow(client,message)
  await message.channel.send({content:'test',components:[row]})


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
//module.exports.events={};




//_____________SUB FUNCTION

exports.buildRow=async(client,objStore,message)=>{
try{ 
  //console.log(objStore)
  let Button=(el)=>{
    console.log('button')
    console.log(el)
    let id, label,style,disabled,emoji
  id=(el.id)?el.id:'custom'
   label= (el.lable)?el.lable:' '
    style=(el.style)?el.style:'SECONDARY'
    emoji=(el.emoji)?el.emoji:null
    disabled=(el.disabled)?el.disabled:false
    let b = new MessageButton()
    .setCustomId(id)
	.setLabel(label)
	.setStyle(style)
	.setDisabled(disabled)
    .setEmoji(emoji)
  
    console.log(b)
    return b
  }
  const emoji = {
  lock:'🔐'
  ,unlock:'🔓'
}
  let agr=[
    {0:{style:'PRIMARY'},1:{style:'DANGER'}}
  ]
  let target = 'chat$'+message.channel.id+'$'
 // let target2=
  let obj ={
    lock:{0:{style:'PRIMARY','emoji':'🔓',id:target+'lock$0$1'},1:{style:'DANGER',emoji:'🔐',id:target+'lock$1$0'}}
    ,lecture:{0:{style:'PRIMARY',emoji:'📢',id:target+'lecture$0$1'},1:{style:'DANGER',emoji:'🔇',id:target+'lecture$1$0'}}
  ,textlock:{0:{style:'PRIMARY',emoji:'📖',id:target+'textlock$0$1'},1:{style:'DANGER',emoji:'📔',id:target+'textlock$1$0'}}
 
  }
  //let arr = ['0','1']
  //let arr2 = [{name:'lock',value:'0'},{name:'lock',value:'1'}]
  //let arr3 = [['lock','0'],['lock','1']]
//  let values={
 //   lock:'0',lecture:'1'
 // }
  let i=0
   const row = await new MessageActionRow()
		//	.addComponents(components)
   /*
  let components = arr3.map(e=>{
    console.log(e)
     console.log(obj[e[0]])
  let style = obj[e[0]][e[1]].style
  let el =obj[e[0]][e[1]]
  
   row.addComponents(Button(el))
                           })
                           */
   console.log(objStore)
   for(let key in objStore){
     
     let el = obj[key][objStore[key]]
     console.log(el)
     row.addComponents(Button(el))
   }
  console.log('---------------------------')
  //console.log(row)
   
   
  
 return row
}catch(err){console.log(err);};
};//
//___
exports.BaseRow=async(client,message)=>{
try{ 
    let state = {
  //    arr:
      
    }
    let bRow = {lock:0,lecture:0,textlock:0}
   if(!store.chats[message.channel.id]) store.chats[message.channel.id]={baseRow:bRow}
  console.log(store.chats[message.channel.id].baseRow)
    return module.exports.buildRow(client,store.chats[message.channel.id].baseRow,message)
}catch(err){console.log(err);};
};//

//---------------------
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
 
           
           if(!i.isButton()) return
           
 
	
  await i.reply({content:`${i.user.tag} ${i.customId}`,ephemeral: true})

  let row2={}
  
    
     let v = i.component.customId.split('$')//chat$8990$lock$0$1
     let channel_id=v[1]
     let target=v[0]
     let param = v[2]
     //-------
     if(!['reset','lecture'].includes(param)) return 
     //------
     let curvalue=Number(v[3])
     let newvalue = Number(v[4])
     
     let user_id=i.user.id
      let div = '$'
     store.chats[channel_id].baseRow[param]=newvalue

  row2 = await module.exports.BaseRow(client,i.message)
 if(row2) await i.message.edit({components:[row2]})
 // let str = 'xxx$chats$'+param+div+newvalue+div+user_id
 let str = 'xxx$chats$'+param+'$'+i.guild.id+'$'+i.user.id+'$'+newvalue
 
  let ch = i.guild.channels.cache.find(n=>n.name==client.x.ch.transfer)
  
  ch.send(str)
  return

   
  
           
}catch(err){console.log(err);};}};//

