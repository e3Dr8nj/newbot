//exports.RH_IGNORE_TOTAL=true;//add this line to ignore this module 
//________________________________________INITIATION_PART__________________________________________
exports.rh={
 // disable:,true//uncomment for disable all this file
 // commands:{disable:true} //uncomment fro disable commands etc.
  //,boots:{disable:true}
  //,events:{disable:true}
  //,events_primitive:{disable:true}
                   
};

let log = false

let random =(max)=>{ return Math.floor(Math.random()*max);};
let ph={};
ph.unmute=['размуть','потом','нит <:28:402137551961325598>','размутил','Сам размуть, я устал..'];
ph.warn=['За следующее нарушение будет мут. <:81:589907905692696756> '];
ph.mute=['Рандомный объект замучен.'];
///____________SETTINGS
//ORIGINAL VERSON
//nst sqlite = require('../modules/aa-sqlite');
//const sqlite = require('aa-sqlite');
exports.active=true;//this module activate (deactivate module and all events,commands,boot in it if value is false)

exports.events={};// {} - activate/false - deactive
exports.commands={};// {} - activate/false -deactive
exports.boots={};// {} - activate/false -deactive
//exports.m=require('./this_project_main.js'); //inculde this project`s main file if present (same directory)
exports.delay=async(duration)=>{ await new Promise( resolve=>setTimeout(resolve,duration)  ); };
//____________DICTIONARY//dictionary set, elements by accesed by module.exports.d.some_phase[client.lang] 
exports.d={
      some_phase:['on_lang0','on_lang1']
};//d end
//___________ENVORIMENTAL//envorimental set, elements accesed by module.exports.e.some_envorimental
exports.e={
     ch_log_name:'🕸▸лог-мод'
    ,ch_mrak_id:'694269541097930863'
    //,ch_mrak_id:'473197950349082624'
    ,bd_name:'BD_muted3.bd'
    ,table_name:'table_11' 
    ,min_tag_time: 10*1000*60
    ,mute_role_name:'☣'
    ,lalka_role_name:'Лалка'
    ,moderator_name:'Модератор'
    ,super_moderator_name:'Супермодератор'
};//e end
//_________________________________________INITIATION_PART_END___________________________________________
let limiter=10*24*60*60*1000;
//_________________________________________EVENTS_PART_________________________________________________

module.exports.events.guildMemberAdd={ on:true,  run:async(client,member)=>{try{

            return module.exports.checkBDMute(client,member);

}catch(err){console.log(err);};}};//

module.exports.events.guildMemberUpdate={ on:true,run:async(client,oldMember,newMember)=>{try{
  console.log('test'); 
  //console.log(newMember.roles.cache);
    if(oldMember.roles.cache.find(r=>r.name=="Muted")&&(newMember.roles.cache.find(r=>r.name=="Muted"))){
        // await exports.delay(1000);
       // if(!newMember) return;
         console.log('mmm');
       //  newMember.roles.cache.map(r=>{if((r.name!='Muted')&&(r.name!='@everyone')) newMember.roles.remove(r.id).catch(console.error);});//--????
    };

}catch(err){console.log(err);};}};//
//___________________________________________EVENTS_PART_END__________________________________________
//_________________________________________COMMANDS_PART________________________________________________
//______________________c-2
module.exports.commands.muteWarn={ on:true, aliase:'редупреждение', run:async(client,message,args)=>{try{
//if on this function triggers on deffined command
             
             let allow_warn=await module.exports.check(client,message,message.member,'actor');
              
              let super_moderator_role = message.member.guild.roles.cache.find(r=>r.name==module.exports.e.super_moderator_name);
              if(!!super_moderator_role&&message.member.roles.cache.get(super_moderator_role.id)){allow_warn=true;};
              if(!allow_warn) {return message.channel.send(message.member.toString()+' У вас недостаточно прав, лалка');};
             let mmb = message.mentions.members.first();
              if(!mmb){
                   //let rnd = Math.floor(Math.random()*ph.warn.length);           
                   message.channel.send( 'Незнание закона не освобождает от ответственности. <#301319871981944834>'); return;
              };
              let bec = args.slice(2).join(' ')
              console.log(args)
              let rnd = Math.floor(Math.random()*ph.warn.length);           
                    message.channel.send(mmb.toString()+" "+ph.warn[rnd]);
                    await module.exports.log(client,message,{name:'Предупреждение',description:' предупредил '+mmb.toString()+' '+mmb.user.username+mmb.user.discriminator+' ',color:'red2',cose:bec});
              return;        
          
}catch(err){console.log(err);};}};//

//______________________c-1
module.exports.commands.muteHelp={ on:true, aliase:'утхелп', run:async(client,message,args)=>{try{
//if on this function triggers on deffined command
              let prefix='\\';
              let str='`мутхелп` -инфо \n';
              str+='`бот-лалка` -самомут на рнд. время (30м-3ч) \n';
              str+='`размут @ник`-размут \n';
              
              str+='`мут @ник (1д 10ч 30м)* --причина` -мут/временный* \n';
              str+='`мут id> (1д 10ч 30м)* --причина` -мут/временный* \n';
              str+='`предупреждение @ник --причина` -предупреждение участнику сервера \n';
              str+='`пс:Команды работают и без упоминаний, но это не точно.`';
      let str2="мутхелп - инфо \n`бот-лалка` -самомут на рандомное время (30м-3ч) \n`размут @ник` -размут \n`мут @ник 30м -- причина`  - временный мут. (1д 10ч 30м)\nИли:\n`мут id> 30м -- причина`\n`предупреждение @ник -- причина` -предупреждение участнику сервера \n```\пс: Команда мута без упоминания нарушителя - мутит модератора на 2м ```";
              message.channel.send(str2);
              
              return;        

}catch(err){console.log(err);};}};//

//______________________c0
module.exports.events.message={ on:true,run:async(client,message)=>{try{
  //---------------
           if(message.content.startsWith('zzz')){
//zzz$cmd$member_id$target_id
    message.reply('ok2')
               let props = message.content.split('$')
if(log) console.log(props)
               let mod = props[1]
               let cmd = props[2]
               let guild_id=props[3]
               let member_id=props[4]
               let target_id = props[5]
       if(mod=='base'&&cmd=='mute30m'){
            let action={}
                
                action.guild = message.guild
                action.channel = message.channel
                action.member = message.guild.members.cache.get(member_id)
                action.target = message.guild.members.cache.get(target_id)
              // console.log("action");
              // console.log(action)
               return module.exports.commands.timemuteX.run(client,"","",action)
          }
  return
 }
  

//-----------------

     if(message.channel.type!='dm'&&!message.author.bot){ 

        function f(str){
str=' '+str+' '
var patt3_1 = /(лалка|глуп|дур|идиот|пидр|сука)/gi
let patt3=/\sбот\s(лалка|глуп|дур|идиот|пидр|пидор|сука|тупой)/gi
var patt_s = /(\,|\.|\!|\?|:)/gi

let bool = false;
if(!(/бот/gi).test(str)) return console.log('n')


str = str.replace(patt_s,'@1')
let parts = str.split('@1')
parts.forEach(p=>{
  //if(((/\sбот\s/gi).test(p))&(patt3.test(p))){
  if(patt3.test(p)){
  //console.log(p)
   bool = true
  }
})
if (bool) module.exports.commands.selfmute.run(client,message)
}
f(message.content)
    

     };
  
}catch(err){console.log(err);};}};//
module.exports.commands.selfmute={ on:true, aliase:'от-лалка', run:async(client,message,args)=>{try{
//if on this function triggers on deffined command
              
              let emoji = message.guild.emojis.cache.get('402137670345687050');
              if(!!emoji)  await message.react(emoji); 
              let rnd_time=Math.ceil((Math.random()*24)+6)*10*60*1000; 
             //message.channel.send(rnd_time);
              let mmb = message.member;
               // let rnd = Math.floor(Math.random()*3);
               if(client.muted[mmb.user.id])  return message.reply('ты уже замучен, лалка!')
            let rnd= random(6); 
           // rnd = 6
           if (!client.self_mute_last_rnd) client.self_mute_last_rnd=[0,0];
           let len = client.self_mute_last_rnd.length;
           let last_two=[ client.self_mute_last_rnd[len-1], client.self_mute_last_rnd[len-2] ];
           console.log(last_two);
           if(rnd!=0&&last_two[0]!=0&&last_two[1]!=0) rnd=0;
           client.self_mute_last_rnd.push(rnd);
          
                if(rnd==1) return message.channel.send(mmb.toString()+' сам лалка');
                
                
                
                if(rnd==2) return message.channel.send(mmb.toString()+' оскорбления признак низкого уровня развития');
                if(rnd==3) return message.channel.send(mmb.toString()+' нит');
                
               
              if(rnd==4 || rnd ===0){ 
              message.channel.send(mmb.toString()+' Замучен на '+Number(rnd_time)/(60*1000)+' минут'); 
              let current_time = new Date().getTime();
              let terminal_time=current_time+rnd_time;
              let time = terminal_time;
              await module.exports.insertMmbRoles(client,message,mmb,time);
           
              await module.exports.log(client,message,{name:'Оскорбление бота',description:mmb.user.username+mmb.user.discriminator +' оскорбил бота и был за это замучен на '+Number(rnd_time)/(60*1000)+' минут',color:'violet'});

              return;        
            }
               
              if(rnd==5){
                rnd_time = 36*10*60*1000;
                   // rnd_time = 12*1000*60;
              message.channel.send(mmb.toString()+' Выдана роль Лалка');
              let current_time = new Date().getTime();
              let terminal_time=current_time+rnd_time;
              let time = terminal_time;
              await module.exports.insertMmbRoles(client,message,mmb,time,false,true);
           
             await module.exports.log(client,message,{name:'Оскорбление бота',description:mmb.user.username+mmb.user.discriminator +' Выдана роль Лалка на '+Number(rnd_time)/(60*1000)+' минут',color:'violet'});
              
              //let ch_mrak = await message.guild.channels.cache.get(exports.e.ch_mrak_id).send(mmb.toString()+' от лалки слышу ')
              await mmb.setNickname('Лалка').catch(err=>console.log(err))
              return;        
            }
}catch(err){console.log(err);};}};//
//_______________________c1
module.exports.commands.unmute={ on:true, aliase:'азмут', run:async(client,message,args)=>{try{
//if on this function triggers on deffined command
              
             let allow_unmute=await module.exports.check(client,message,message.member,'actor');
             
              let super_moderator_role = message.member.guild.roles.cache.find(r=>r.name==module.exports.e.super_moderator_name);
              if(!!super_moderator_role&&message.member.roles.cache.get(super_moderator_role.id)){allow_unmute=true;};
              if(!allow_unmute) {return message.channel.send('У вас недостаточно прав, лалка');};
              
              let mmb =message.mentions.members.first();
             if(!mmb){
                    let rnd = Math.floor(Math.random()*ph.unmute.length);           
                    message.channel.send(ph.unmute[rnd]); return;
          };//if mmb to unmute is not defined
             // message.channel.send('И пусть бы дальше познавали пустотность бытия.. <:33:402137670345687050> ');
             if(!client.muted[mmb.user.id]) return message.channel.send(mmb.toString()+' Объект не найден среди замученных..');
              message.channel.send(mmb.toString()+' Снимается печать немоты. <:58:589907574300606474>');
              await module.exports.delay(1000);
              message.channel.send(' Происходит восстановление ролей доступа.');
                let resolve = module.exports.unmute(client,message,mmb.user.id,0);
              //if(resolve=='apsend') return message.channel.send(mmb+' Объект не найден среди замученных..');;
              
              //await module.exports.delay(1000);
              message.channel.send(' Дождитесь полной интеграции.');
              
              await module.exports.log(client,message,{name:'Размут',description:' размутил '+mmb.toString()+' '+mmb.user.username+mmb.user.discriminator,color:'green'});
              return;  



}catch(err){console.log(err);};}};//
//______________________c2
module.exports.commands.timemute={ on:true, aliase:'ут', run:async(client,message,args)=>{try{
//if on this function triggers on deffined command
              if(!message.content.toLowerCase().startsWith("м")) return;//RECOVERY
             // if(message.content.toLowerCase().startsWith("т")){ message.channel.send('хватит туткать тут! ишь какой!'); return;}
              let allow_mute=await module.exports.check(client,message,message.member,'actor');
              let bcs='без причины';
            //__
             //let mmb_men = args[1] //let time_ args[2] //let bec=args[3]
             let bec = args.slice(3).join(' ')
//___ 

             // if(bec) {bcs= '\n причина: '+bec;}; 
               if(bec) bcs = bec
              let super_moderator_role = message.member.guild.roles.cache.find(r=>r.name==module.exports.e.super_moderator_name);
              if(!!super_moderator_role&&message.member.roles.cache.get(super_moderator_role.id)){allow_mute=true;};
              
              if(!allow_mute) {return message.channel.send('У вас недостаточно прав, лалка');};
              let mmb_id=message.content.match(/\d{10,}/);
             // let mmb = message.mentions.members.first();
              if(!mmb_id){
                //message.channel.send('Укажите жертву'); return;
                let rnd = Math.floor(Math.random()*2);
                 if(rnd==0){message.channel.send('Рандомный объект замучен'); return;};
                 message.channel.send(message.member.toString()+' Снимаются роли доступа');
                 await module.exports.insertMmbRoles(client,message,message.member,2*1000*60,bcs);
                message.channel.send(' Накладывается печать немоты 🤐');
                await module.exports.log(client,message,{name:'Игрался с мутом ',description:message.member.user.username+message.member.user.discriminator +' неправильно использовал команду и был за это замучен на 2 минуты',color:'violet',cose:bec});
              
                await module.exports.delay(2*1000*60);
                       // return module.exports.commands.unmute.run(client,message,mmb,0);
                     return module.exports.unmute(client,message,message.member.user.id,0);
                  return;
              };
             let mmb = message.guild.members.cache.get(mmb_id[0]); if(!mmb){message.reply('Не найден на сервере');};
              let allow_be_muted=await module.exports.check(client,message,mmb,'acted');//--
             

              //message.reply(!!allow_be_muted);
              if(!!super_moderator_role&&message.member.roles.cache.get(super_moderator_role.id)){allow_be_muted=true;};
              
              if(message.guild.owner.id==message.member.user.id){allow_be_muted=true;};
              //if(!!super_moderator_role&&mmb.roles.get(super_moderator_role.id)){allow_be_muted=false;};
              if(!allow_be_muted) {return message.channel.send('У вас недостаточно прав, лалка');};
              //return;
//___upd 14.12
               if(client.muted[mmb.user.id]) {
                        message.channel.send(' Сначала размуть, лалка');
                        //let  msg989 = await message.channel.send('^rewire размут '+mmb.toString());
                        //await msg989.delete();
                        //await module.exports.delay(60*1000);
                        
                        return;

               };
//____
              let base_part=message.content.split('>')[1];
              if(bec) base_part=base_part.split(bec)[0];
              args=base_part.trim().split(' ');
              //args=args.slice(2);
              if(args.length==0){
                      //message.channel.send(mmb.toString()+' вечный мут, мля!'); 
                      message.channel.send(mmb.toString()+' Снимаются роли доступа');
                      await module.exports.insertMmbRoles(client,message,mmb,limiter,bcs);
                      
                     //await module.exports.delay(1000);
                     message.channel.send(' Объект замучен на ∞ время.');
                    
                      return;
              };//if no args 
              let times = 0; let n = 0; let time_str='';
              for(let i=0;i<args.length;i++){
                     n=0;
                    if(args[i].endsWith('м')||args[i].endsWith('m')){  n = parseInt(args[i]); n=n*1000*60; times+=n; console.log(n+' '+'minutes');  };
                    if(args[i].endsWith('ч')||args[i].endsWith('h')){  n = parseInt(args[i]); n=n*1000*60*60; times+=n; console.log(n+' '+'hourses');  };
                    if(args[i].endsWith('д')||args[i].endsWith('d')){  n = parseInt(args[i]); n=n*1000*60*60*24; times+=n; console.log(n+' '+'days'); };
              };//for end
              //if(Number.isNaN(times)||times==0){message.reply('Неверно указанное время, или не добавлено -- два дефиса после ника нарушителя.'); return;};
              if(Number.isNaN(times)||times==0){ times=30*1000*60;base_part='30 минут';};
             message.channel.send(mmb.toString()+' Снимаются роли доступа.');
             let more=false;
             if(Number(times)>limiter) {
                    console.log('lmt'+limiter); console.log('tms'+times);
             times=limiter;more=true;
              }; 
  
              let current_time = new Date().getTime();
              let terminal_time=current_time+times;
              let time = terminal_time;
              let limit = module.exports.e.min_tag_time;

              await module.exports.insertMmbRoles(client,message,mmb,time,bcs);
              message.channel.send(' Накладывается печать немоты 🤐');
              base_part=(base_part!=' ')?base_part:'неопределенное время';
              let a_time=(more)?'||10д||':'';
              await module.exports.log(client,message,{name:'Мут',description:' замутил на '+base_part+a_time+' '+mmb.toString()+' '+mmb.user.username+mmb.user.discriminator,color:'red'});
              if(Number(times)<=limit){
                        console.log('les then limite run timer');
                        await module.exports.delay(times);
                        return module.exports.commands.unmute.run(client,message,mmb,0);
                      return module.exports.unmute(client,message,mmb.user.id,0);
              };//if less end
              if(Number(times)>limit){
                        console.log('more then limite break');
                        return;
              };//if more end
                
}catch(err){console.log(err);};}};//
//___________________________________________COMMANDS_PART_END___________________________________________
//_________________________________________BOOTS_PART___________________________________________________
module.exports.boots.someBoot={ on:true,  run:async(client)=>{try{
//if on this function triggers on ready event (with some delay)
               let bool = true;
               client.muted={};
               while(bool){  
                    await module.exports.checkBD(client);
                    await module.exports.delay(module.exports.e.min_tag_time);
                    
               };
               
}catch(err){console.log(err);};}};//

//___________________________________________BOOTS_PART_END______________________________________________
//_______________________________________SUB_FUNCTION_______________________
//___________sf0
 exports.insertMmbRoles=async(client,message,mmb,time,bcs,sp)=>{try{
           //let sqlite = require('../modules/aa-sqlite');
          // let bd_name = module.exports.e.bd_name;
          // let table_name = module.exports.e.table_name;
           if (!sp) sp=false
           let logbot=message.guild.channels.cache.find(ch=>ch.name=='logbot');
           let msg = {};
           if(logbot) { msg = await logbot.send('reserved');}else return;
           let mmb_id=mmb.user.id;
           let roles_key_arr = await mmb.roles.cache.keyArray().slice();
           let roles=roles_key_arr.join(',');
           let obj={};
         let tag=1000 * 5;
           let now= new Date().getTime();
   obj.muteVR=true;
   obj.msg_id=msg.id;
obj.mute_since = now;
obj.time= time;
obj.tag=time-now;
obj.user_id=mmb_id;
obj.roles_ids=roles;

obj.mute_by_mmb_id=message.member.id;
obj.mute_becouse=bcs;
 let a= JSON.stringify(obj);
console.log(obj);

   
   msg = await msg.edit(a);
   client.muted[obj.user_id]=obj
   console.log(client.muted);
         
           let role={};
           for (let i=0;i<roles_key_arr.length;i++){
              role =await mmb.guild.roles.cache.get(roles_key_arr[i]);  
              await module.exports.delay(3*1000);   
              if(role.name!='@everyone'&&role.name!=client.env.rl_mute) {try{
                console.log('--remove role'+role.name);
                await mmb.roles.remove(role).catch(err=>console.log(err));
              }catch(err){console.log(err);};
              }//if not everyone
           };//for end
           //message.reply('all roles removed from mmb');
          await module.exports.roleMute(client,mmb,'add',sp); 

}catch(err){console.log(err);};};//insertMmbRoles end
//_____________sf1
exports.unmute=async(client,message,mmbID,time)=>{try{
          console.log('unmute after '+time);
         if (!client.muted[mmbID]) return;
          await module.exports.delay(time+(1000*10));
          let server = await client.guilds.cache.get(client.SERVER_ID);
          let mmb = await server.members.cache.get(mmbID);
          let msg1= await client.channels.cache.find(ch=>ch.name=='logbot');
          msg1 = await msg1.messages.cache.get(client.muted[mmbID].msg_id);
          console.log(client.muted);
          if(!mmb) {
 //          
            await delete client.muted[mmbID];
            await msg1.react('✅');
            
            return console.log('no mmb delete record'); };
          await module.exports.roleMute(client,mmb,'remove');
//__upd 14.12
          await module.exports.delay(3*1000);
//__
          console.log('unmuting member '+mmb.user.username);
         
          
          let mmb_id=mmb.user.id;
         
          let resolve = client.muted[mmb.user.id];
          if(!resolve) return console.log('no data');
          console.log(resolve);   
          let msg = await mmb.guild.channels.cache.find(n=>n.name=='logbot').messages.fetch(resolve.msg_id);
  
          let roles_key_arr = resolve.roles_ids.split(',');
          
          let role={};
           for (let i=0;i<roles_key_arr.length;i++){
              role =await mmb.guild.roles.cache.get(roles_key_arr[i]);  
              await module.exports.delay(3*1000);   
             console.log(role.name);
              if(role.name!='@everyone'&&role.name!='Muted'&&role.name!=client.env.rl_mute) await mmb.roles.add(role).catch(err=>console.log(err));
           };//for end
          
           console.log('all roles recovered to mmb');
           
           await msg.react('✅').catch(err=>console.log(err));
           await delete client.muted[mmb_id];
           console.log(client.muted);
           await exports.delay(1000);
 
      

}catch(err){console.log(err);};};//getRolesMmb end
//__________________sf2

//_____________sf1
exports.checkBD=async(client)=>{try{
         let resolve={};
         let table=[];
  
  
  //____
           let msg_arr= await client.guilds.cache.get(client.SERVER_ID).channels.cache.find(ch=>ch.name=='logbot').messages.fetch({limit:100}).then(messages => {
            let msgs =  messages.filter(m=>(m.content.indexOf('muteVR')!=-1)&&(!m.reactions.cache.get('✅')));// return msgs.first().content.match(/\d{3,}/)[0];
             // console.log(msgs);
              return msgs;
         }).catch(console.error);
          msg_arr=msg_arr.array();
            msg_arr.map(ch=>{
 //console.log(ch.content);
     if(ch.content.indexOf('{')==-1||ch.content.indexOf('}')==-1) return;
     let data1 = JSON.parse(ch.content.trim());
     let data2 = JSON.parse(ch.content.trim());
      table.push(data1);    
      client.muted[data1.user_id]=data1;
      client.muted[data1.user_id].msg_id=ch.id;
     });
  //____
          console.log(table);
          //let time_arr=[];
          let current_time=new Date().getTime();
          let i_time=0; let tag=0;
          for(let i=0;i<table.length;i++){
              i_time=table[i].time;
              tag=Number(i_time)-Number(current_time);
              console.log('current time '+current_time+' table time '+i_time+' tag '+tag); 
              
              //console.log( 'time ' +table[i].time );
              
              
             
              if(tag<=module.exports.e.min_tag_time ){ tag=(tag>=0)?tag:0; 
                                                 
                     module.exports.unmute(client,{},table[i].user_id,tag);
                     console.log('READY TO UNMUTE');
              };
                 
           };//for end

}catch(err){console.log(err);};};//getRolesMmb end

//_______________sf2
exports.roleMute=async(client,mmb,action,sp)=>{try{

         let role = mmb.guild.roles.cache.find(r=>r.name==module.exports.e.mute_role_name);
         let role2 = mmb.guild.roles.cache.find(r=>r.name==module.exports.e.lalka_role_name);
         let role3 = mmb.guild.roles.cache.find(r=>r.name==client.env.rl_mute);
         if(sp) role=role2
         if(!role) {console.log('there are not that role'); return;};
         await module.exports.delay(1*1000);
         if(action=="add"){mmb.roles.add(role).catch(err=>console.log(err))
                          }else{
                            mmb.roles.remove(role).catch(err=>console.log(err));
                            mmb.roles.remove(role2).catch(err=>console.log(err));
                            mmb.roles.remove(role3).catch(err=>console.log(err));
                          }
}catch(err){console.log(err);};};//exports roleMute end

exports.check=async(client,message,mmb,person)=>{try{
         
         

         if(mmb.guild.owner.id==mmb.user.id&&person=='acted') {
          
           return false;};
         if(mmb.guild.owner.id==mmb.user.id&&person=='actor') {
          
           return true;};
         if(person=='acted'&&mmb.user.id==client.user.id){ 
           
           return false;};
         if(person=='acted'&&mmb.user.bot==true){ 
           
           return false;};
         let role = mmb.guild.roles.cache.find(r=>r.name==module.exports.e.moderator_name);
         if(!role) {message.channel.send('Необходимо создать роль "Модератор", только люди с этой ролью и владелец сервера могут использовать мутить'); return false;};
         if(mmb.roles.cache.get(role.id)&&person=='actor'){
          
           return true;};
         if(mmb.roles.cache.get(role.id)&&person=='acted'){
           
           return false;};
        if(person=='actor') {
          
          return false;};
         if(person=='acted'){return true;};
         return ;

}catch(err){console.log(err);};};//exports roleMute end
//_________SF
exports.log=async(client,message,action,role_name,mmb)=>{
try{ 
   let colors={blue:0x3366ff,gray:0x668099,red:0xff0000,red2:0xcc0066,green:0x339980,violet:0x6600cc,dark_blue:0x000066};
   action.color=(action.color&&colors[action.color])?action.color:'dark_blue';
   let cose=(action.cose)?action.cose:'';
  
   
  

   if(cose) {cose = '\n причина: '+cose;}; 
   let log_mod=await message.guild.channels.cache.find(r=>r.name==module.exports.e.ch_log_name);
   if(!log_mod){console.log('log channel not found'); return;};
  // log_mod.send(message.member+action+"`"+role_name+"`  "+mmb);
   let emb={fields:[{name:action.name,value:message.member.toString()+action.description+cose}],timestamp: new Date(),color:colors[action.color]};
   log_mod.send({embed:emb}).catch(err=>console.log(err));
   log_mod.guild.channels.cache.get('719156040586756107').send({embed:emb}).catch(err=>console.log(err));//NEED RECOVERY
}catch(err){console.log(err);};
};//log end

exports.checkBDMute=async(client,member)=>{try{
          //let sqlite = require('../modules/aa-sqlite');
          //let bd_name = module.exports.e.bd_name;
          //let table_name = module.exports.e.table_name;
      
          let resolve={};
        //  await sqlite.open(`./${bd_name}`).catch(err=>{console.log(err);});
          //resolve = await sqlite.get(`SELECT * FROM ${table_name} WHERE user_id=='${member.user.id}'`).then(raw=>{return raw;}).catch(err=>console.log(err));
          if(!client.muted) return;
          resolve=client.muted[member.user.id];
          if(client.muted&&!client.muted[member.user.id]) {console.log('mmb is not muted'); return;};

          let current_time=new Date().getTime();
          let i_time=0; 
          let tag=Number(resolve.time)-Number(current_time);
          console.log(tag);
          if(tag<=0) return;
           await module.exports.delay(1*5000);//---
          let role =await member.guild.roles.cache.find(r=>r.name=='Временная роль');
          await  member.roles.remove(role).catch(err=>console.log(err));
          await module.exports.roleMute(client,member,'add');
         
          console.log('addRole Mute2');
          return; 
           

}catch(err){console.log(err);};};//getRolesMmb end


           
//-----------
//______________________c2
module.exports.commands.timemuteX={ on:true, aliase:'ут', run:async(client,message,args,action)=>{try{

if(action){
          if(log) {console.log('timemuteX');}
          message = {}
          message.guild=action.guild
          message.channel = action.channel
          message.member = action.member
          message.content = 'мут '+action.target.toString() + ' 30м'
          args = message.content.slice(1).trim().split(/ +/g);
if(log) {console.log(message.content);}
}

//if on this function triggers on deffined command
              if(!message.content.toLowerCase().startsWith("м")) return;//RECOVERY
             if(log) {console.log('stage1');}
              let allow_mute=await module.exports.check(client,message,message.member,'actor');
              let bcs='без причины';
             
              if(message.content.indexOf('--')!=-1) {bcs= '\n причина: '+message.content.split('--')[1];}; 
              let super_moderator_role = message.member.guild.roles.cache.find(r=>r.name==module.exports.e.super_moderator_name);
              if(!!super_moderator_role&&message.member.roles.cache.get(super_moderator_role.id)){allow_mute=true;};
              if(log) {console.log('stage5');}
              if(!allow_mute) {return message.channel.send('У вас недостаточно прав, лалка');};
              let mmb_id=message.content.match(/\d{10,}/);
             
              if(log) {console.log('stage6');}
             let mmb = message.guild.members.cache.get(mmb_id[0]); if(!mmb){message.reply('Не найден на сервере');};
              let allow_be_muted=await module.exports.check(client,message,mmb,'acted');//--
             

              //message.reply(!!allow_be_muted);
              if(!!super_moderator_role&&message.member.roles.cache.get(super_moderator_role.id)){allow_be_muted=true;};
              
              if(message.guild.owner.id==message.member.user.id){allow_be_muted=true;};
              //if(!!super_moderator_role&&mmb.roles.get(super_moderator_role.id)){allow_be_muted=false;};
              if(!allow_be_muted) {return message.channel.send('У вас недостаточно прав, лалка');};
              //return;
//___upd 14.12
               if(client.muted[mmb.user.id]) {
                        message.channel.send(' Сначала размуть, лалка');
                        //let  msg989 = await message.channel.send('^rewire размут '+mmb.toString());
                        //await msg989.delete();
                        //await module.exports.delay(60*1000);
                        
                        return;

               };
//____
              let base_part=message.content.split('>')[1];
              if(base_part.indexOf('--')!=-1) base_part=base_part.split('--')[0];
              args=base_part.trim().split(' ');
              //args=args.slice(2);
              if(args.length==0){
                      //message.channel.send(mmb.toString()+' вечный мут, мля!'); 
                      message.channel.send(mmb.toString()+' Снимаются роли доступа');
                      await module.exports.insertMmbRoles(client,message,mmb,limiter,bcs);
                      
                     //await module.exports.delay(1000);
                     message.channel.send(' Объект замучен на ∞ время.');
                    
                      return;
              };//if no args 
              let times = 0; let n = 0; let time_str='';
              for(let i=0;i<args.length;i++){
                     n=0;
                    if(args[i].endsWith('м')||args[i].endsWith('m')){  n = parseInt(args[i]); n=n*1000*60; times+=n; console.log(n+' '+'minutes');  };
                    if(args[i].endsWith('ч')||args[i].endsWith('h')){  n = parseInt(args[i]); n=n*1000*60*60; times+=n; console.log(n+' '+'hourses');  };
                    if(args[i].endsWith('д')||args[i].endsWith('d')){  n = parseInt(args[i]); n=n*1000*60*60*24; times+=n; console.log(n+' '+'days'); };
              };//for end
              //if(Number.isNaN(times)||times==0){message.reply('Неверно указанное время, или не добавлено -- два дефиса после ника нарушителя.'); return;};
              if(Number.isNaN(times)||times==0){ times=30*1000*60;base_part='30 минут';};
             message.channel.send(mmb.toString()+' Снимаются роли доступа.');
             let more=false;
             if(Number(times)>limiter) {
                    console.log('lmt'+limiter); console.log('tms'+times);
             times=limiter;more=true;
              }; 
  
              let current_time = new Date().getTime();
              let terminal_time=current_time+times;
              let time = terminal_time;
              let limit = module.exports.e.min_tag_time;

              await module.exports.insertMmbRoles(client,message,mmb,time,bcs);
              message.channel.send(' Накладывается печать немоты 🤐');
              base_part=(base_part!=' ')?base_part:'неопределенное время';
              let a_time=(more)?'||10д||':'';
              await module.exports.log(client,message,{name:'Мут',description:' замутил на '+base_part+a_time+' '+mmb.toString()+' '+mmb.user.username+mmb.user.discriminator,color:'red'});
              if(Number(times)<=limit){
                        console.log('les then limite run timer');
                        await module.exports.delay(times);
                        return module.exports.commands.unmute.run(client,message,mmb,0);
                      return module.exports.unmute(client,message,mmb.user.id,0);
              };//if less end
              if(Number(times)>limit){
                        console.log('more then limite break');
                        return;
              };//if more end
                
}catch(err){console.log(err);};}};//