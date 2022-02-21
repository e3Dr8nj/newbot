const { MessageActionRow, MessageEmbed, MessageButton, MessageSelectMenu } = require('discord13.js');
const componentRow = require('./Row.js')
 const store= require('../store.js') 
  exports.Rows=async(client,state,channel_id)=>{
try{ 
  

   
  if(!state.chats[channel_id]) state.chats[channel_id]={}
  //--
  let rows=[]
  let val = (state.chats&&state.chats[channel_id]&&state.chats[channel_id].val)?state.chats[channel_id].val:0
  let obj = (val==1)?store.in.chats.rowsini:store.in.chats.rowsini2
  
  for(let key in obj){
      let r = await componentRow.Row(client,state,key,obj[key],channel_id)
      
      rows.push(r)
  }
  /*
  let BaseRow = await componentRow.Row(client,state,'baseRow',store.in.chats.rowsini.baseRow,channel_id)
  let PermsRow = await componentRow.Row(client,state,'permsRow',store.in.chats.rowsini.permsRow,channel_id)
  let AlertRow = await componentRow.Row(client,state,'alertRow',store.in.chats.rowsini.alertRow,channel_id)
  
  return [BaseRow,PermsRow,AlertRow]
   
 */
  return rows
 
}catch(err){console.log(err);};
};//