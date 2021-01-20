//raw v2.1.0
let fs = require('fs');
exports.external_module=[];
exports.log=true;
exports.dm_commands=false;
exports.prefix='!';
exports.fetch_members=false;
exports.fetch_messages=false;
exports.server_id='';
exports.boots=true;
exports.commands=true;
exports.events=true;
exports.events_primitive=true;

exports.delay=async(duration)=>{ return new Promise((resolve)=>{return setTimeout(resolve,duration)}); };
exports.random =(max)=>{ return Math.floor(Math.random()*max);};
exports.commands={};

exports.run = async(client,event)=>{try{
     if(!client.rh){await exports.buildRh(client)};
     let current_time=new Date().getTime();
let i_time = client.rh.env.rateLimitDate;
let tag=Number(i_time)-Number(current_time);
if(tag>0) {
    await exports.delay(tag); console.log('rateLimit: '+client.rh.env.rateLimitDate);
};

  if(client.rh.events_primitive[event.t]){//to handle WS data
     client.rh.events_primitive[event.t].map(f=>f.run(client,event));
   };// 

  if(event.t=='READY'){ 
      await module.exports.delay(1000);
      await module.exports.onGuildCreate(client);return;
  };

  if(event.t =='MESSAGE_CREATE'){//redirect to command handler
      return module.exports.onMessage(client,event.d);
   };

  return;
}catch(err){console.log(err);};};//exports.run end

//____________________________________ON_GUILD_CREATE__________EVENT

 module.exports.onGuildCreate=async(client)=>{try{
  
   module.exports.server_id=(!module.exports.server_id)?client.SERVER_ID:module.exports.server_id;

   if(!!module.exports.server_id&&exports.fetch_members) await module.exports.fetchMembers.run(client,module.exports.server_id);
   if(!!module.exports.server_id&&module.exports.fetch_messages) await module.exports.fetchMessages.run(client,module.exports.server_id);

   if(!module.exports.folder_name) return console.log('RH_folder_name needed be set');
   const folder_name = module.exports.folder_name;
   if (module.exports.log) console.log('RH loading modules from '+folder_name);
   await exports.delay(1000);
   await module.exports.load_all(client,folder_name);
   
//____--
}catch(err){console.log(err)};};//
//____________________________________________________________

//______________________________________________ON_MESSAGE___EVENT

exports.onMessage=async(client,event_d)=>{try{
 //every time, then user send the message that starts with prefix, it finds a command and execute it
   if(event_d.author.id==client.user.id){return;}; 
   let channel=client.channels.cache.get(event_d.channel_id);
   if(channel.type=='dm'){if (module.exports.dm_commands==false) return;};//
   let message = await channel.messages.fetch(event_d.id).then(collected=>{return collected;});
   let args = message.content.slice(module.exports.prefix.length).trim().split(/ +/g);
   let cmd_name = args[0];
   if(client.rh.commands[cmd_name]){
   
      if(message.author==client.user) return;
      client.rh.commands[cmd_name].map(f=>f.exe(client,message,args));//even if commands have the same names
      return;
   };

}catch(err){console.log(err);};};//onMessage end

//_________________________________________________________________________
module.exports.load_all=async(client,folder_name)=>{try{
         
    await module.exports.setSome(client,folder_name,'folder','boots','sb0');
    await module.exports.setSome(client,folder_name,'folder','commands','sc0');
    await module.exports.setSome(client,folder_name,'folder','events','se0');
    await module.exports.setSome(client,folder_name,'folder','events_primitive','sep0');
               
}catch(err){console.log(err)};};//--load_all
//___
module.exports.setSome=async(client,path,from,type,funcName)=>{try{
   //let type="commands"; let funcName = 'sc0';
   if (!module.exports[type]) return;
   await exports.delay(1000);
   if(from=='external') {
     module.exports.external_module.map(m=>module.exports[funcName](client,m,'..external..',m.name)); return;
   };//if external end
   module.exports.apply(client,path,module.exports[funcName],type);
}catch(err){console.log(err)};};//--setSome
//_____
module.exports.apply=async(client,path,func,type)=>{try{
       
   function apply(path,func,type){
  fs.readdir(path+"/", (err, files) => {try{
   //if (err) return console.error(err);
    files.forEach(file=> {try{ 
      
            let path1=`${path}/${file}`;
            let isDir = fs.existsSync(path1) && fs.lstatSync(path1).isDirectory();
            if(isDir) { return apply(path1,func,type); };
            let target_module = require(`${path}/${file}`);
            
            let moduleName = file.split(".")[0];
            console.log(!!target_module.rh+' '+moduleName);
            if(!target_module.rh) return;
             if(!!target_module.rh.disable) return;
            if(target_module.rh[type]&&!!target_module.rh[type].disable) return;
            func(client,target_module,path,moduleName);
            
     }catch(err){console.log(err);};});//forEach end
    
  }catch(err){console.log(err);};
  });//event trigger
  };//--apply
            return apply(path,func,type);
}catch(err){console.log(err)};};//--apply
//_________________SET_BOOT
//____________________sb0


module.exports.sb0=async(client,target_module,path,moduleName)=>{try{
     
        if(!target_module.RH_IGNORE_TOTAL&&!!target_module.boots&&!target_module.RH_IGNORE_BOOTS){
                  for(let key in target_module.boots){ 
                      if(!target_module.boots[key].RH_IGNORE){
                            path=(path)?path:'...'; moduleName=(moduleName)?moduleName:'...';
                            if(module.exports.log) console.log('BOOT EXE .../'+path+'/'+moduleName+'/'+key);
                            target_module.boots[key].run(client);
                     };//if boot is on end
                  };//for end
            
             };//if target_module is active

}catch(err){console.log(err)};};
//________________________________________________
//___________________________


//_________________SET_COMMANDS
//____________________sc0
module.exports.sc0=async(client,target_module,path,moduleName)=>{try{
       // if(!target_module.RH_IGNORE_TOTAL&&!!target_module.commands&&!target_module.RH_IGNORE_COMMANDS){    
                        
                       for(let key in target_module.commands){
                             let commandName = key; 
                             if(!target_module.commands[key].disable){
                                 if(!!target_module.commands[key].aliase){commandName=target_module.commands[key].aliase.slice();};
                          
                                // (client.rh)?{}:client.rh={};
                                 //(client.rh.commands)?{}:client.rh.commands={};
                                 client.rh.commands[commandName]=(client.rh.commands[commandName])?client.rh.commands[commandName]:[];
                                 let cmd = {exe:target_module.commands[key].run};
                                 client.rh.commands[commandName].push(cmd);

                                 path=(path)?path:'...'; moduleName=(moduleName)?moduleName:'...';
                                 if(module.exports.log) console.log('COMMAND SET.../'+path+'/'+moduleName+'/'+commandName);
                             };//if on is true;
                      };//for end
                //  };//module is not ignored

}catch(err){console.log(err)};};

//_____________________________________EVENT
//_____________________SET_EVENTS
module.exports.se0=async(client,target_module,path,moduleName)=>{try{
         
          
               if(!target_module.RH_IGNORE_TOTAL&&!!target_module.events&&!target_module.RH_IGNORE_EVENTS){
                  for(let key in target_module.events){  
                      if(!target_module.events[key].RH_IGNORE){
                            client.on(key, (...args) => target_module.events[key].run(client, ...args));
                             path=(path)?path:'...'; moduleName=(moduleName)?moduleName:'...';
                            if(module.exports.log) console.log('EVENT SET .../'+path+'s/'+moduleName+'/'+key);
                        };//if on end
                  };//for key
               };//if module is active

}catch(err){console.log(err)};};


//_____________________SET_EVENTS_PRIMITIVE
module.exports.sep0=async(client,target_module,path,moduleName)=>{try{
         
          
               if(!target_module.RH_IGNORE_TOTAL&&!!target_module.events_primitive&&!target_module.RH_IGNORE_EVENTS_RIMITIVE){
                  for(let key in target_module.events_primitive){  
                      if(!target_module.events_primitive[key].RH_IGNORE){
                            if(!client.rh.events_primitive[key]) client.rh.events_primitive[key]=[];
                            client.rh.events_primitive[key].push(target_module.events_primitive[key]);
                            
                            path=(path)?path:'...'; moduleName=(moduleName)?moduleName:'...';
                            if(module.exports.log) console.log('EVENT  PRIMITIVE SET .../'+path+'/'+moduleName+'/'+key);
                        };//if on end
                  };//for key
             
            };//if module is active

}catch(err){console.log(err)};};

//____________FETCH_MESSAGES_IF_NEED
module.exports.fetchMessages={ on:true,  run:async(client,id)=>{try{
     if(!module.exports.fetch_messages) return;
     if(module.exports.log) console.log('fetching messages');
           let ch_ids=[];
           let server = client.guilds.get(id);
           if(!server) return;
           server.channels.map(ch=>{
             // console.log('from channel '+ch.name);
              ch_ids.push(ch.id);
            });//
            // console.log(ch_ids);
            for(let i=0;i<ch_ids.length;i++){
                   let channel =  await server.channels.get(ch_ids[i]); 
                  
                   if (channel.type=='category'||channel.type==='voice') {continue;};  
                   if(module.exports.log) console.log('fetch messages from  '+server.name+'/'+channel.name);
                   let msg_arr =  await channel.fetchMessages({limit:100}).then(messages=>{
                               return messages;
                   }).catch(err=>console.log(err.message));
         };//
        await module.exports.delay(1000);
        return;

}catch(err){console.log(err);};}};//

//____________FETCH_MEMBERS_IF_NEED
module.exports.fetchMembers={ on:true,  run:async(client,id)=>{try{
     if (!module.exports.fetch_members) return;
     if(!module.exports.server_id){return console.log('server id not defined for fetching members from');};
     let server=await client.guilds.get(module.exports.server_id);
      if(!server) return;
      if(module.exports.log) console.log('Fetching members from server '+server.name);
            await server.fetchMembers()
              .then()
              .catch(console.error);
      return;

}catch(err){console.log(err);};}};//

//-------------------


module.exports.buildRh=async(client)=>{try{
  client.rh={};
    client.rh.commands={};//array for storing commands
client.rh.env={};//obj for storing envorimentals
client.rh.meth={};//obj for storing methods
client.rh.delay = module.exports.delay;
client.rh.random = module.exports.random;
client.rh.mod={};
client.rh.mod.raw={};
client.rh.mod.raw.rateLimit=0;
client.rh.mod.raw.rateLimitDate=0;
 client.rh.events_primitive={};   
         
}catch(err){console.log(err)};};

