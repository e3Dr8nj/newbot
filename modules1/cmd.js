let delay=async(duration)=>{await new Promise(resolve=>setTimeout(resolve,duration))}; 
let random =(max)=>{ return Math.floor(Math.random()*max);};
//exports.active=true;
//exports.on=true;
exports.dictionary={
'use':['You cannot use it','Ты не можешь использовать эту комманду']
};
exports.commands={};
exports.commands.run1={aliase:'cmd'};
exports.commands.run1.run =(client,message,args)=>{
if(message.author.id!='437330563423010827') return message.reply(module.exports.dictionary['use'][client.lang]);
/*if(message.author.id!='437330563423010827'){
   const code = args.slice(1).join(" ");
  return message.reply('>>'+code+'\n<<'+module.exports.dictionary['use'][client.lang], {code:"xl"});
  };
*/
function asyncEval(code){
  return new Promise(function(resolve,reject){ let res = eval(code); resolve(res);   }   );
};//asyncEval
function clean(text) {
  if (typeof(text) === "string")
   return  text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
   
  else
   return text;
};
let process=async()=>{
try {
      const code = args.slice(1).join(" ");
      console.log(code);
     // await message.delete().catch(err=>console.log(err));
     //await delay(1000); 
     // let lstMsg = await message.channel.fetchMessages();

     client.msg  = await message.channel.messages.fetch({limit:10}).then(messages => {
            
             let msg =  messages.find(m=>m.reactions.cache.get('✅'));
            return msg;
              //return msgs;
         }).catch(console.error);
       await delay(1000);




      let evaled = await asyncEval(code);
      
      if (typeof evaled !== "string")
        evaled = await require("util").inspect(evaled);
      
     await  message.channel.send('>>'+code+'\n<<'+clean(evaled), {code:"xl"});
      
    } catch (err) {
      
      const code = args.slice(1).join(" ");
      console.log(code);
      message.channel.send(`\`ERROR\` \`\`\`xl\n>>${code} \n<<${clean(err)}\n\`\`\``);
      message.delete().catch(err=>console.log(err));
    }
};//process end
process();
};//exports.run end
