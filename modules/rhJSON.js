//exports.RH_IGNORE_TOTAL=true;//add this line to ignore this module
exports.table ={}
exports.rh = {
  //  disable:true//uncomment for disable all this file
  // commands:{disable:true} //uncomment fro disable commands etc.
  //,boots:{disable:true}
  //,events:{disable:true}
  //,events_primitive:{disable:true}
};

//________________________________________TOOLS__________________________________________
let delay = async duration => {
  await new Promise(resolve => setTimeout(resolve, duration));
};
//* for delay inside async function, use it instead setTimeout
let random = max => {
  return Math.floor(Math.random() * max);
};
let log = true;
//_________________________________________COMMANDS_PART_________________________________________________
module.exports.commands = {};
//--------

module.exports.commands.command1 = {
  disable: false,
  aliase: "json",
  run: async (client, message, args) => {
    try {
     // return module.exports.json[args[1]]
      //let messages_arr = await module.exports.getAction({channel:message.channel,tableName:'table2'})
      
    //  let json = module.exports.json;
     
     // json.post(message.channel,{key:6,tableName:'newTable'},'newTableName')
     // json.postFromString(message.channel,args[1])
      
   //let table = await json.getSuper({channel:message.channel})
   //  console.log(table);
     //message.channel.send(await json.toString(table))
     // let l = await json.post(message.channel,{key:4})
     // message.channel.send(l)
     // await json.postPoli(message.channel,table,false,45,true)
 //  let table2 = await json.toString(table)
 // console.log(table2)
      if(args[1]=='get'){
        let table = await module.exports.json.getTable(message.channel,args[2])
        module.exports.table = table
        message.channel.send('table is ready')
        console.log(table)
      }else if(args[1]=='output'){
        let table = module.exports.table
        let tableS=await module.exports.json.toString(table)
        message.channel.send(tableS)
        console.log(tableS)
      }else if(args[1]=='o'){
        let table = module.exports.table
        let emb=await module.exports.json.outputTable(table)
        message.channel.send({embeds:[emb]})
       // console.log(tableS)
      }
      
    } catch (err) {
      console.log(err);
    }
  }
}; //

//_________________________________________BOOTS_PART___________________________________________________

module.exports.boots = {};
module.exports.boots.someBoot1 = {
  disable: false,
  run: async client => {
    try {
      //code to execut bot on loading
      // client.rhJSON=exports.getJSON
    } catch (err) {
      console.log(err);
    }
  }
}; //
//_________________________________________EVENTS_PART_________________________________________________
module.exports.events = {};

exports.getMessages = async (channel, action) => {
  try {
    //

    //----
    //------
    //let serverRoles = guild.roles.cache (v discord 12-13)
    /*let action={
  keyword:'keyword'
  selectByKeyword:'keyword'
  ,selectKeyVal:'Key***Value'
  ,selectByKey:'Key' --
  ,slice:''
  ,getLast:'number'--
  ,getFirst:'number'--
  }
  */
    console.log("stage");
    /*
    let resolve={};
         let table=[];
  
  
  //____
         
          let keyWord = action.keyword
          let msg_arr= await channel.messages.fetch({limit:100}).then(messages => {
           // let msgs =  messages.filter(m=>(m.content.indexOf(keyWord)!=-1)&&(!m.reactions.cache.get('✅')));// return msgs.first().content.match(/\d{3,}/)[0];
             // console.log(msgs);
            let msgs =  messages.filter(m=>(m.content.indexOf('{"')!=-1)&&(m.content.indexOf('"}')!=-1)&&(!m.reactions.cache.get('✅')));// return msgs.first().content.match(/\d{3,}/)[0];
            if(action.selectByKeyword){
              let msgs2 = msgs.filter(m=>(m.content.indexOf(keyWord)!=-1))
              msgs = msgs2
            }
              return msgs;
         }).catch(console.error);
        //  msg_arr=msg_arr.array();
            msg_arr.map(ch=>{
 //console.log(ch.content);
     
     let data1 = JSON.parse(ch.content.trim());
     let data2 = JSON.parse(ch.content.trim());
      table.push(data1);    
     
     });
  //____
          console.log(table);
  //---selectors
  
  let table2 =[]
          if(action.selectByKeyword){
            
          }else if(action.selectByKey){
            
            
            table.map(e=>{
              if(e[action.selectByKey]) table2.push(e)
            })
          }else if(action.selectKeyVal){
            
            let select_arr = action.selectKeyVal.split('***')
            table.map(e=>{
              if(e[select_arr[0]]===select_arr[1]) table2.push(e)
            })
          }
          
        table = table2
        
 
  
  
  
  //--------------
         return table
         */
  } catch (err) {
    console.log(err);
  }
}; //del?


//module.exports = module.exports.getRoles

//---------
module.exports.getAction = async action => {
  try {
    //action.channel are required, action.tableName optional
    
    let resolve = {};
    let channel = action.channel;
    let table = [];
    
    let msg_arr = await channel.messages
      .fetch({ limit: 100 })
      .then(messages => {
        // console.log(messages);
        let msgs = messages.filter(
          m =>
            m.content.indexOf('{') != -1 &&
            m.content.indexOf('}') != -1 &&
            !m.reactions.cache.get("❌")
        );
       // console.log(msgs)
        return msgs;
      })
      .catch(console.error);

    msg_arr.map(m => {
      //console.log(ch.content);
//
      console.log(m.content)
      let str = m.content.trim()
 //   let patt_s = /(\{|\})/ig
     // str = str.replace(patt_s,'%').trim()
//let parts = str.split('%')
      let parts = str.split('}')
//console.log(parts)
parts.forEach(p=>{
  if(p){
  p=p+'}'
   console.log(p)
  //__
  let data1 = JSON.parse(p);
      let data2 = JSON.parse(p);
     // console.log(data1);
      if (action.tableName && data1.tableName == action.tableName&&data1) {
        table.push(data1);
      } else if (!action.tableName&&data1) {
        table.push(data1);
      }
  }//
  //__
   
  
})
      
      /*
      
      let data1 = JSON.parse(m.content.trim());
      let data2 = JSON.parse(m.content.trim());
      console.log(data1);
      if (action.tableName && data1.tableName == action.tableName) {
        table.push(data1);
      } else if (!action.tableName) {
        table.push(data1);
      }
      */
      }
      
    
               );
               
    //____
    console.log(table);
    
    return table;
    
  } catch (err) {
    console.log(err);
  }
}; //

module.exports.postAction = async action => {
  try {
    if(!action.channel||(!action.object&&!action.string)) return
    //action.channel,action.object are required, action.tableName,action.postWay optional
    let channel = action.channel;
    if (action.tableName) action.object.tableName = action.tableName;
    let jsoned=''
    if(action.string&&!action.object){
      let obj = {}
      let arr = action.string.split(',')
      arr.map(e=>{
        let arr2= e.split(':')
        obj[arr2[0]]=arr2[1]
      })
      console.log(obj)
      action.object = obj
     }
   jsoned = JSON.stringify(action.object)
    let msg = await  channel.send(jsoned);
  let  len= jsoned.length
    return len
  } catch (err) {
    console.log(err);
  }
}; //
//___
module.exports.createJson= async action => {
  try {
    //object||string =>jsonobject||jsonstring
    //action.getType: fromStingToString,fromStringToJson,fromObjectToJson,fromObectToString
    //action.objectOrString, action.targetType
    //from 'string' from 'object' to 'sting' to 'json'
    //module.exports.convert --- action.from action.to targetType
    //console.log(action)
    if((!action.object&&!action.string)) return

    if (action.tableName) action.object.tableName = action.tableName;
    let jsoned=''
    if(action.string&&!action.object){
      let obj = {}
      let arr = action.string.split(',')
      arr.map(e=>{
        let arr2= e.split(':')
        obj[arr2[0]]=arr2[1]
      })
    
      action.object = obj
     }
    console.log(action)
     if(action.toString){
     let string=''
     for(let key in action.object){
         string+=key+':'+action.object[key]+','   
       }
       string+='\n'
      jsoned=string
    }else{
   jsoned = JSON.stringify(action.object)}
    console.log(jsoned)
    return  jsoned
  } catch (err) {
    console.log(err);
  }
}; //
//___
module.exports.selectAction = async action => {
  try {
    if (!action.table || !action.selectA) return;
    let selected = [];
    action.table.map(e => {
      let d = {};
      action.selectA.map(s => {
        d[s] = e[s];
      });
      selected.push(d);
    });
    return selected;
  }catch (err) {
    console.log(err);
  }
};//

module.exports.whereAction = async action => {
  try {
    if (!action.table || !action.whereF) return;
    let selected = [];

    action.table.map(e =>{
      if (action.whereF(e)) selected.push(e);
    });
    return selected;
  } catch (err) {
    console.log(err);
  }
}; //


module.exports.collectionAction = async action => {
  try {
    //action.table, action.collectionKey are required
    if (!action.table || !action.collectK) return;
   
    let collection = {}; 
    action.table.map(e => { 
      collection[e[action.collectK]] = e;
    });
    
    return collection;
  } catch (err) {
    console.log(err);
  }
}; //
module.exports.orderAction = async action => {
  try {
    //action.table, action.collectionKey are required
    if (!action.table || !action.orderF) return;
   
    return action.table.sort(action.oderF)
  } catch (err) {
    console.log(err);
  }
}; //
//--------
module.exports.json = {
  getTable: async (channel, tableName) => {
    return module.exports.getAction({ channel: channel, tableName: tableName });
  },//channel* <tableName> Get json table from channel
  select: async (table, arr) => {
    return module.exports.selectAction({ table: table, selectA: arr });
  },
  where: async (table, filter) => {
    return module.exports.whereAction({ table: table, whereF: filter });
  },
  order: async (table, filter) => {
    return table.sort(filter);
  },

  orderDesc: async (table, key) => {
    return table.sort((a, b) => {
      return b[key] - a[key];
    });
  },
  orderAsc: async (table, key) => {
    return table.sort((a, b) => {
      return a[key] - b[key];
    });
  },
  toCollection: async (table, key) => {
    return module.exports.collectionAction({
      table: table,
      collectK: key
    });
  },
   toString: async (table, filter) => {
   // return module.exports.collectionAction({
   //   table: table,
    //  collectK: key
    //});
     console.log(table)
     let string=''
     let keys =''
     let values=''
     table.map(e=>{
       for(let key in e){
         string+=key+':'+e[key]
         keys+=key+'\n'
         values+=e[key]
       }
       string+='\n'
     })
     return string
  },
    outputTable: async (table, filter) => {
   // return module.exports.collectionAction({
   //   table: table,
    //  collectK: key
    //});
      let string=''
     let keys =''
     let values=''
     table.map(e=>{
       for(let key in e){
         string+=key+':'+e[key]
         keys+=key+'\n'
         values+=e[key]+'\n'
       }
       string+='\n'
     })
      let emb ={
        fields:[
         
		{ name: '\u200B', value: '\u200B' },
		{ name: 'keys', value: keys, inline: true },
		{ name: 'values', value: values, inline: true },
          { name: 'name', value: 'mic'},
          { name: 'points', value: '7'},
        ]
      }
      return emb
     console.log(table)
  
  },

  getSuper: async (action) => {
    
    //let table = await module.exports.getAction(action);
    //let table =[]
    if(!action.table){
      action.table = await module.exports.getAction(action)
    }
    if (action.selectA) action.table = await module.exports.selectAction(action);
    if (action.whereF) action.table = await module.exports.whereAction(action);
    if (action.orderF) action.table = await module.exports.orderAction(action);
    if (action.collectK){
      action.table = await module.exports.collectionAction(action);
      
    }
     return action.table;}
  ,post:async (channel,object,tableName)=>{
    let action = {channel:channel,object:object}
    if(tableName) action.tableName = tableName
    let len = await module.exports.postAction(action)
    return len
  }
  ,postPoli:async (channel,table,tableName,amount,toString)=>{
    
    let action = {channel:channel,table:table,tableName:tableName,amount:'100',toString:toString}
    return module.exports.postPoliAction(action)
    
  }
  
    
  
  
  ,postFromString:async (channel,string,tableName)=>{
    let action = {channel:channel,string:string}
    if(tableName) action.tableName = tableName
    return module.exports.postAction(action)
  }
  
};
/*
module.exports.get=async(action)=>{try{
 
   
 

}catch(err){console.log(err);};};//
*/
module.exports.postPoliAction = async action => {
  try {
  //action.channel, action.table,<action.tableName>,<action.amount>
    
  //console.log('postPoliAction')
    // console.log(action)
    if(!action.channel||!action.table) return false
   let channel = action.channel
   let table = action.table
   let toString = !!action.toString
   let str = ''
   let amount = (action.amount)?Number(action.amount):1900
   let current_len =0
   for(let i =0;i<table.length;i++){
     action.object=table[i]
     let string= await module.exports.createJson(action)
    console.log(string+'str')
     /*
     if(toString){
       string=''
       for(let key in table[i]){string+=key+':'+table[i][key]}
       string+='\n'
     }
     */
     if((str.length+string.length)<amount){
       str+=string
       
     }else{
      // console.log(str)
       channel.send(str)
     //  console.log(str.length)
       str=string
     }
     //if(str) channel.send(str)
     
   }
    if(str) channel.send(str)
    
    return true
    
    
    
    
   
    
  } catch (err) {
    console.log(err);
  }
}; //