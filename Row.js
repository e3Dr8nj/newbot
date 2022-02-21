const { MessageActionRow, MessageEmbed, MessageButton, MessageSelectMenu } = require('discord13.js');
const components_ = require('./Button.js')
   const store= require('../store.js') 
  exports.Row=async(client,state,row_name,ini,channel_id)=>{
try{ 
  
   
   //--
 
  let bRow = ini
   if(!state.chats[channel_id][row_name]) {state.chats[channel_id][row_name]=Object.assign({},store.in.chats.rowsini[row_name])
                                          }
   
  let objStore = state.chats[channel_id][row_name]
  //--
  
  
  let target = 'chat$'+channel_id+'$'+row_name+'.'


 let obj = state.chats.getButtons(target)
  
  let i=0
   const row = await new MessageActionRow()
	
   
   for(let key in objStore){
     
     let el = obj[key][objStore[key]]
   el.name=key
     
    state.chats.buttons[key]={row_name:row_name}
     let b2 = await components_.Button(client,el)
     console.log('ini------------------------------------')
   if(key in ini)   console.log('-----------------------------------------------=============================')
     
     console.log('ini end')
    if(key in ini)  row.addComponents(b2)//test
   }

   
   row.custom_id=row_name
  
 return row
 
}catch(err){console.log(err);};
};//