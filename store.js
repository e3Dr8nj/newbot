let target='#target'

let d2=(full)=>{let str = " "
if(full) str+="\nНадо послать сообщение с пингом @роли или @ника в своем текстовом канале и затем нажать на кнопку для действий с этим человеком или ролью."
  str+= "\n🔕Закрыть войс всем кто без доступа. Тем, кто находится в войсе на момент закрытия выдастся доступ. Повторное нажатие откроет войс."
  +"\n🗣 @ник / @роль - Выдать доступ для входа в заблокированный войс*"
if(full) {str+="\n🔇 - Мутит всех кто без спец микрофона. Повторное нажатие снимает мут."
 +"\n🎙️ @ник / @роль - выдать спец. микрофон в замученном войсе"

+"\n🧹 - кикнуть всех."
         }
str+="\n🚫@ник / @роль - Забанить*"
+"\n👑@ник - Передать права на войс"
+"\n♻️ @ник / @роль - обнулить права доступа*"
+"\n♻️ Сбросить настройки по умолчанию"

if(full) {str+="\n Еще можно так: курсор на ник=> правая кнопка мыши=> приложения=> бан,доступ, передать права, обнулить предыдущие действия для юзера."
+"\nПозвать народ в свой войс:\nПеред нажатием кнопки можно отправить сообщение с уточнением темы беседы начинающееся с точки\nПример:\n.Давайте поговорим о Иисусе!"


+"\n👽 - пинг роли для беседы"
+"\n🎮 - пинг роли для игор"
         }
//+"\n🎞️ -кнопка оповещает о просмотре фильма в данном войсе и предлагает присоединится к беседе, возможно указать дополнительную информацию о фильме, для этого перед нажатием пришлите сообщение с темой в этот канал"

                      return (str)}
module.exports.d2 = d2
module.exports.in={
    
      embed:{
        d:d2()

      }
 
  
  ,chats:{
    getButtons:function(target){
      let obj={
        help:{0:{style:'DANGER',label:'Help',id:target+'help$0$1',disabled:true},1:{style:'DANGER',label:'Help',id:target+'help$1$1',disabled:true}}
       , showall:{0:{style:'DANGER',label:'Показать доп. кнопки',id:target+'showall$0$1'},1:{style:'DANGER',label:'Скрыть доп. кнопки',id:target+'showall$1$0'}}
       ,lock:{0:{style:'SECONDARY',label:'🔕закрыть',id:target+'lock$0$1$key$1'},1:{style:'SECONDARY',label:'🔕открыть',id:target+'lock$1$0$key$0'}}
    
    //lock:{0:{style:'SECONDARY',label:'тиховсе',emoji:'🔓',id:target+'lock$0$1$key$1'},1:{style:'DANGER',label:'обычный',emoji:'🔐',id:target+'lock$1$0$key$0'}}
    ,lecture:{0:{style:'SECONDARY',label:'🔇тиховсе',id:target+'lecture$0$1$micro$1'},1:{style:'SECONDARY',label:'🔇откл.тиховсе',id:target+'lecture$1$0$micro$0'}}
  ,textlock:{0:{style:'SECONDARY',emoji:'📖',id:target+'textlock$0$1'},1:{style:'DANGER',emoji:'📔',id:target+'textlock$1$0'}}
 ,reset:{0:{style:'SECONDARY',label:'♻️сбросить',id:target+'reset$0$1$resetall',disabled:false},1:{style:'PRIMARY',label:'♻️настройки сброшены',id:target+'reset$1$1$resetall'}}
  
        ,key:{0:{style:'SECONDARY',label:'🗣доступ@',id:target+'key$0$0',disabled:true},1:{style:'SECONDARY',label:'🔑ключ @',id:target+'key$1$1'},type:'message',needmention:true}
    ,micro:{0:{style:'SECONDARY',label:'🎙️микро @',id:target+'micro$0$0',disabled:true},1:{style:'SECONDARY',label:'🎙️микро @',id:target+'micro$1$1'},type:'message',needmention:true}
  ,ban:{0:{style:'SECONDARY',label:'🚫забанить @',id:target+'ban$0$0'},1:{style:'PRIMARY',emoji:'♻️',id:target+'ban$1$1'},type:'message',needmention:true}
  ,trans:{0:{style:'SECONDARY',label:'👑права @',id:target+'trans$0$0',disabled:false},1:{style:'PRIMARY',emoji:'♻️',id:target+'trans$1$1'},type:'message',needmention:true}
    ,'null':{0:{style:'SECONDARY',label:'♻️сбросить настройки для @',id:target+'null$0$0'},1:{style:'PRIMARY',emoji:'♻️',id:target+'null$1$1'},type:'message',needmention:true}
 ,'constructive':{0:{style:'SECONDARY',label:'👽го войс',id:target+'constructive$0$0',disabled:false},1:{style:'PRIMARY',emoji:'♻️',id:target+'constructive$1$1'},type:'message',report:true}
,'game':{0:{style:'SECONDARY',label:'🎮го игоры',id:target+'game$0$0',disabled:true},1:{style:'PRIMARY',emoji:'♻️',id:target+'game$1$1'},type:'message',report:true}
, 'film':{0:{style:'SECONDARY',label:'🎞️фильм',id:target+'film$0$0'},1:{style:'PRIMARY',emoji:'♻️',id:target+'film$1$1'},type:'message'}
    ,broom:{0:{style:'SECONDARY',label:'🧹кик всех',id:target+'broom$0$0'},1:{style:'PRIMARY',emoji:'🧹',id:target+'broom$1$1'}}
  ,report:{0:{style:'LINK',label:'го войс'},1:{style:'PRIMARY',emoji:'🧹',id:target+'broom$1$1'},type:'linkdata'}
 
      }
      
      return obj
      }
  
    ,'buttons':{}
   , 
      rowsini:{
        baseRow:{'lock':0,'lecture':0,'reset':0,broom:0}
        ,'permsRow':{key:0,micro:0,ban:0,trans:0,'null':0}
        ,'alertRow':{constructive:0,game:0}
        ,'settingsRow':{help:0,showall:0}
      
    }
    ,rowsini2:{
        baseRow:{lock:0,reset:0}
        ,'permsRow':{key:0,ban:0,trans:0,'null':0}
        
        ,'settingsRow':{help:0,showall:0}
      
    }
  }
}
     
     
     
     