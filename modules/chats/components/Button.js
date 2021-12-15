const { MessageActionRow, MessageEmbed, MessageButton, MessageSelectMenu } = require('discord13.js');

  
  exports.Button=async(client,el)=>{
try{ 
  
  
    console.log('button')
    console.log(el)
    let id, label,style,disabled,emoji
  id=(el.id)?el.id:'custom'
   label= (el.label)?el.label:' '
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
 
}catch(err){console.log(err);};
};//