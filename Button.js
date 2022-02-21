const { MessageActionRow, MessageEmbed, MessageButton, MessageSelectMenu } = require('discord13.js');

  
  exports.Button=async(client,el)=>{
try{ 
  
  
 
    let id, label,style,disabled,emoji
  id=(el.id)?el.id:null
  //if(el.id) id=el.id
   label= (el.label)?el.label:' '
    style=(el.style)?el.style:'SECONDARY'
    emoji=(el.emoji)?el.emoji:null
    disabled=(el.disabled)?el.disabled:false
    let b = new MessageButton()
    
	.setLabel(label)
	.setStyle(style)
	.setDisabled(disabled)
    .setEmoji(emoji)
  if(id) b.setCustomId(id)
  if(el.url) b.setUrl(el.url)
   // console.log(b)
    
    return b
 
}catch(err){console.log(err);};
};//