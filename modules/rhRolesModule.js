exports.RH_IGNORE_TOTAL=true;//add this line to ignore this module 
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
let log = true
//_________________________________________COMMANDS_PART_________________________________________________
module.exports.commands = {};
//--------
module.exports.commands.command1={disable:false,aliase:'roles', run:async(client,message,args)=>{try{
   //code to execut then this command triggered
  
  let roles = message.guild.roles.cache
  let val = args[2]
  let cnt = args.slice(1).join(' ')
  console.log(cnt)
  let action = JSON.parse(cnt.trim())
  console.log(action)
  let r2 = await module.exports.getRoles(roles,action)
  return message.channel.send(r2.join(','))
}catch(err){console.log(err);};}};//
//--------
module.exports.commands.command2={disable:false,aliase:'cmd2', run:async(client,message,args)=>{try{
   //code to execut then this command triggered
}catch(err){console.log(err);};}};//

//_________________________________________BOOTS_PART___________________________________________________

module.exports.boots = {}; 
module.exports.boots.someBoot1={disable:false,run:async(client)=>{try{
    //code to execut bot on loading
  client.rhRoles=exports.getRoles
}catch(err){console.log(err);};}};//
//_________________________________________EVENTS_PART_________________________________________________
module.exports.events={};

exports.getRoles=async(serverRoles,action)=>{try{
  //let serverRoles = guild.roles.cache (v discord 12-13)
  /*let action={
  keyword:"keyword"
  ,slice:"posstart,posend"
  ,getValues_arr:"value"//"name","id"
  }
  */
    let roles_arr=[];
    let bool=false;
    let keyWord = action.keyword
   let roles_arr2= serverRoles;
  
    let pos=[];
    roles_arr2.map(r=>{if(r.name==keyWord){ pos.push(r.position);}; return;});
        console.log('primitive '+pos);
    pos = pos.sort(function(a, b){return a-b}).reverse();
        console.log('sorted '+pos);
    roles_arr2.map( r=>{
              if(r.position<pos[0]&&r.position>pos[1]){bool=true;};
              if(bool) {roles_arr.push(r); }   
              bool=false;        
                            });
    roles_arr = roles_arr.sort(function(a, b){return a.position-b.position}).reverse();//---
     if(log) console.log(roles_arr)
   
    if(!action) return  roles_arr;
 
   if(action["slice"]){
     let count = action["slice"].split(',')
     roles_arr = await roles_arr.slice(count[0],count[1]);
   }
    if(action["getValues"]){
     roles_arr= await exports.getRolesValue(roles_arr,action["getValues"])
   }if(action["type"]){
     //roles_arr= exports.getRolesValue(roles_arr,action["getValues_arr"])
     if(action["type"]=='object'&&!!action['getValues']){
       let obj={}
       console.log(roles_arr)
       roles_arr.map(r=>{obj[r]=0})
       roles_arr=obj
     } if(action["type"]=='object'&&!action['getValues']){
       let obj={}
       console.log(roles_arr)
       roles_arr.map(r=>{obj[r.id]=r})
       roles_arr=obj
     }
       
       
                                //object
   }//type

   
  return roles_arr
}catch(err){console.log(err);};};//getRoleArr end;

exports.getRolesValue=async(roles_arr,val)=>{try{
  let arr=await roles_arr.map(r=>r[val]);
     return arr;
}catch(err){console.log(err);};};//getRoleArr end;

//module.exports = module.exports.getRoles
 
 