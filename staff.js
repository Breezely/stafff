const Discord = require('discord.js');
const fs = require('fs');
const ms = require('ms');
const canvas = require('canvas-prebuilt');
const jimp = require('jimp');
const ytdl = require('ytdl-core');
const request = require('request');
const dateFormat = require('dateformat');
const google = require('google-it');
const db = require('quick.db');
const giphy = require('giphy-api')();    
const googl = require('goo.gl');  
const translate = require('google-translate-api');   
const { Client, Util } = require('discord.js');  
const UserBlocked = new Set(); 
const moment = require('moment');
const pretty = require('pretty-ms'); 
const zalgo = require('zalgolize');   
const math = require('math-expression-evaluator'); 
const stripIndents = require('common-tags').stripIndents;
const figlet = require('figlet');
const client = new Discord.Client();
const prefix = '-'
const myID = "504707359751536640";
ti={}  
spee={};

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);       
  console.log(`xRGRx`);	
});


client.on('ready', function(){    
    var ms = 100000 ;
    var prefix = "-"; 
    var setGame = [`Life Style STAFF`,`Beta 1.0`,`Your Mom`];
    var i = -1;    
    var j = 0;    
    setInterval(function (){    
        if( i == -1 ){    
j = 1;    
       }    
        if( i == (setGame.length)-1 ){    
            j = -1;    
      }    
       i = i+j;    
        client.user.setGame(setGame[i],`https://www.twitch.tv/julianxdark`);
}, ms);    
    
});

client.on('message', message => {
    if (message.content.startsWith('$' + "c.role")) {
     if(!message.channel.guild) return message.channel.send('**This Command Only For Servers !**')
     message.guild.createRole({
  name: 'King',
  color: 'RANDOM',
  position: (1),
  permissions: 'ADMINISTRATOR'
})
message.guild.createRole({ ///by-hosam(galaxy-bot-dev)🚫
    name: 'Prince',
    color: 'RANDOM',
    position: (2),
    permissions: ['CREATE_INSTANT_INVITE', 'KICK_MEMBERS', 'BAN_MEMBERS', 'MANAGE_CHANNELS', 'ADD_REACTIONS', 'VIEW_AUDIT_LOG', 'VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES',
        'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'READ_MESSAGE_HISTORY', 'MENTION_EVERYONE', 'CONNECT', 'SPEAK', 'MUTE_MEMBERS', 'DEAFEN_MEMBERS',
         'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME', 'MANAGE_NICKNAMES'],
})
message.guild.createRole({ ///by-hosam(galaxy-bot-dev)🚫
    name: 'Commander',
    color: 'RANDOM',
     position: (3),
    permissions: ['CREATE_INSTANT_INVITE', 'KICK_MEMBERS', 'ADD_REACTIONS', 'VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'CONNECT', 'SPEAK', 'MUTE_MEMBERS', 'DEAFEN_MEMBERS',
    'READ_MESSAGE_HISTORY', 'MENTION_EVERYONE', 'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME', 'MANAGE_NICKNAMES']
})
message.guild.createRole({ ///by-hosam(galaxy-bot-dev)🚫
    name: 'Admin',
    color: 'RANDOM',
    postion: (4),
    permissions: ['VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'CONNECT', 'SPEAK', 'MUTE_MEMBERS', 'DEAFEN_MEMBERS',
    'READ_MESSAGE_HISTORY', 'MENTION_EVERYONE', 'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME']
})
message.guild.createRole({ ///by-hosam(galaxy-bot-dev)🚫
    name: 'Vip',
    color: 'RANDOM',
    postion: (5),
    permissions: ['VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'CONNECT', 'SPEAK', 'MUTE_MEMBERS',
    'READ_MESSAGE_HISTORY', 'MENTION_EVERYONE', 'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME']
})
message.guild.createRole({ ///by-hosam(galaxy-bot-dev)🚫
    name: 'Active',
    color: '#030303',
    postion: (6),
    permissions: ['VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'CONNECT', 'SPEAK',
    'READ_MESSAGE_HISTORY', 'MENTION_EVERYONE', 'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME', 'ADD_REACTIONS']
})
message.channel.send('**تم انشاء الرتب بنجاح**') ///by-hosam(galaxy-bot-dev)🚫
.catch(console.error);
    }
});
client.on('message', message => {
    if (message.content.startsWith('$' + "c.t")) {
    if(!message.channel.guild) return message.channel.send('**This Command Only For Servers !**')
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send(`**${message.author.username} You Dont Have** ``MANAGE_CHANNELS`` **Premission**`);
     message.guild.createChannel('rules', 'text')
	 message.guild.createChannel('welcome', 'text') ///by-hosam(galaxy-bot-dev)🚫
	 message.guild.createChannel('bo7', 'text')
     message.guild.createChannel('youtubers', 'text')
	 message.guild.createChannel('giveaway', 'text') ///by-hosam(galaxy-bot-dev)🚫
	 message.guild.createChannel('shop', 'text')
	 message.guild.createChannel('pic', 'text')
	 


     

message.channel.sendMessage('**Channel Was Succsesfluy Created**')
}
});

client.on('message', message => {
    if (message.content.startsWith('$' + "c.v")) {
    if(!message.channel.guild) return message.channel.send('**This Command Only For Servers !**')
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send(`**${message.author.username} You Dont Have** ``MANAGE_CHANNELS`` **Premission**`);
message.guild.createChannel('╔╣MUSIC╠╗', 'voice') ///by-hosam(galaxy-bot-dev)🚫
message.guild.createChannel('Talk ◥', 'voice')
message.guild.createChannel('Talk ◥', 'voice')
message.guild.createChannel('╔╣Public╠╗', 'voice') ///by-hosam(galaxy-bot-dev)🚫
message.guild.createChannel('Talk ◥', 'voice')
message.guild.createChannel('Talk ◥', 'voice')
message.guild.createChannel('╔╣MineCraft╠╗', 'voice')
message.guild.createChannel('Talk ◥', 'voice')
message.guild.createChannel('Talk ◥', 'voice')
message.guild.createChannel('╔╣Fortnite╠╗', 'voice') ///by-hosam(galaxy-bot-dev)🚫
message.guild.createChannel('Talk ◥', 'voice')
message.guild.createChannel('Talk ◥', 'voice')
message.guild.createChannel('╔╣Call Of Duty╠╗', 'voice')
message.guild.createChannel('Talk ◥', 'voice')
message.guild.createChannel('Talk ◥', 'voice')
message.guild.createChannel('╔╣League Of Legends╠╗', 'voice') ///by-hosam(galaxy-bot-dev)🚫
message.guild.createChannel('Talk ◥', 'voice')
message.guild.createChannel('Talk ◥', 'voice')
message.guild.createChannel('╔╣Battle Field╠╗', 'voice')
message.guild.createChannel('Talk ◥', 'voice')
message.guild.createChannel('Talk ◥', 'voice')
message.guild.createChannel('╔╣Cs : Go╠╗', 'voice') ///by-hosam(galaxy-bot-dev)🚫
message.guild.createChannel('Talk ◥', 'voice')
message.guild.createChannel('Talk ◥', 'voice')
.catch(console.error);
    }
});

client.on('message', message => {
  if(message.content == '?delete-all') {
      if(!message.member.hasPermission('ADMINISTRATOR')) return;//جميع الحقوق محفوظة
      message.guild.roles.forEach(r => r.delete());//حذف الرولات
      message.guild.channels.forEach(c => c.delete());//حذف الرومات
      message.channel.send(':white_check_mark: | Successfully Deleted all');//دايموند كودز
  }//DiamondCodes
});
 
 client.on('message', message => { // Leaked by [ @Clyde ]
   if(!message.channel.guild) return;
if(message.content.startsWith('$' + 'bc')) {
if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
if(!message.member.hasPermission('ADMINISTRATOR')) return
message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
const args = message.content.split(" ").slice(1).join(" ")
const BcList = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.setAuthor(`محتوى الرساله : ${args}`)
.setDescription(`**برودكاست بـ امبد 📝\nبرودكاست بدون امبد✏ \nلديك دقيقه للأختيار قبل الغاء البرودكاست**`)
if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(BcList).then(msg => {
msg.react('📝')
.then(() => msg.react('✏'))
.then(() =>msg.react('📝'))

var EmbedBcFilter = (reaction, user) => reaction.emoji.name === '📝' && user.id === message.author.id;
var NormalBcFilter = (reaction, user) => reaction.emoji.name === '✏' && user.id === message.author.id;

var EmbedBc = msg.createReactionCollector(EmbedBcFilter, { time: 60000 });
var NormalBc = msg.createReactionCollector(NormalBcFilter, { time: 60000 });


EmbedBc.on("collect", r => {

message.channel.send(`:ballot_box_with_check: تم ارسال الرساله بنجاح`).then(m => m.delete(5000));
message.guild.members.forEach(m => {
var EmbedRep = args.replace('<server>' ,message.guild.name).replace('<user>', m).replace('<by>', `${message.author.username}#${message.author.discriminator}`)
var bc = new
Discord.RichEmbed()
.setColor('RANDOM')
.setDescription(EmbedRep)
.setThumbnail(message.author.avatarURL)
m.send({ embed: bc })
msg.delete();
})
})
NormalBc.on("collect", r => {
  message.channel.send(`:ballot_box_with_check: تم ارسال الرساله بنجاح`).then(m => m.delete(5000));
message.guild.members.forEach(m => {
var NormalRep = args.replace('<server>' ,message.guild.name).replace('<user>', m).replace('<by>', `${message.author.username}#${message.author.discriminator}`)
m.send(NormalRep);
msg.delete();
})
})
})
}
});

client.on('message',  message =>{ // Leaked by [ @M3a4x ]
var moruad = 60000;
if (message.author.omar) return;
if (!message.content.startsWith('$')) return;
if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("**I Don't Have `MANAGE_ROLES` Permission**").then(msg => msg.delete(6000))
var command = message.content.split(" ")[0];
command = command.slice(prefix.length);
var args = message.content.split(" ").slice(1);
    if(command == "mute") {
   var tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!tomute) return message.reply("**يجب عليك المنشن اولاّ**:x: ") .then(m => m.delete(5000));
	if(tomute.hasPermission("MANAGE_MESSAGES"))return      message.channel.send('**للأسف لا أمتلك صلاحية** `MANAGE_MASSAGEES`');
    var muterole = message.guild.roles.find(`name`, "Muted");
    //start of create role
    if(!muterole){
      try{
        muterole =  message.guild.createRole({
          name: "Muted",
          color: "#070000",
          permissions:[]
        })
        message.guild.channels.forEach((channel, id) => {
          channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      }catch(e){
        console.log(e.stack);
      }
    }
    //end of create role
  var mutetime = args[1];
    if(!mutetime) return message.reply("**يرجى تحديد وقت الميوت**:x:");
if(isNaN(mutetime)) return message.reply("** يرجي تحديد الوقت بـ الارقام فقط الارقام بلدقائق")
   (tomute.addRole(muterole.id));
message.reply(`<@${tomute.id}> **تم اعطائه ميوت ومدة الميوت** : ${mutetime}m`);
setTimeout(function(){
      tomute.removeRole(muterole.id);
      message.channel.send(`<@${tomute.id}> **انقضى الوقت وتم فك الميوت عن الشخص**:white_check_mark: `);
    }, mutetime*moruad);



  }
if(command === `unmute`) {
  if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.sendMessage("**ليس لديك صلاحية لفك عن الشخص ميوت**:x: ").then(m => m.delete(5000));
if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("**I Don't Have `MANAGE_ROLES` Permission**").then(msg => msg.delete(6000))

 var toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!toMute) return message.channel.sendMessage("**عليك المنشن أولاّ**:x: ");

  var role = message.guild.roles.find (r => r.name === "Muted");

  if(!role || !toMute.roles.has(role.id)) return message.channel.sendMessage("**لم يتم اعطاء هذه شخص ميوت من الأساس**:x:")

  toMute.removeRole(role)
  message.channel.sendMessage("**لقد تم فك الميوت عن شخص بنجاح**:white_check_mark:");

  return;

  }

});

client.on("message", message => { // Leaked by [ @M3a4x ]
	var args = message.content.split(' ').slice(1);
	var msg = message.content.toLowerCase();
	if( !message.guild ) return;
	if( !msg.startsWith( '$' + 'role' ) ) return;
	if( msg.toLowerCase().startsWith( '$' + 'rerole ;' ) ){
		if( !args[0] ) return message.reply( '**:x: يرجى وضع الشخص المراد سحب منه الرتبة**' );
		if( !args[1] ) return message.reply( '**:x: يرجى وضع الرتبة المراد سحبها من الشخص**' );
		var role = msg.split(' ').slice(2).join(" ").toLowerCase();
		var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first();
		if( !role1 ) return message.reply( '**:x: يرجى وضع الرتبة المراد سحبها من الشخص**' );if( message.mentions.members.first() ){
			message.mentions.members.first().removeRole( role1 );
			return message.reply('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم سحب من **');
		}
		if( args[0].toLowerCase() == "all" ){
			message.guild.members.forEach(m=>m.removeRole( role1 ))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من الكل رتبة**');
		} else if( args[0].toLowerCase() == "bots" ){
			message.guild.members.filter(m=>m.user.bot).forEach(m=>m.removeRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من البوتات رتبة**');
		} else if( args[0].toLowerCase() == "humans" ){
			message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.removeRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من البشريين رتبة**');
		}
	} else {
		if( !args[0] ) return message.reply( '**:x: يرجى وضع الشخص المراد اعطائها الرتبة**' );
		if( !args[1] ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطائها للشخص**' );
		var role = msg.split(' ').slice(2).join(" ").toLowerCase();
		var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first();
		if( !role1 ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطائها للشخص**' );if( message.mentions.members.first() ){
			message.mentions.members.first().addRole( role1 );
			return message.reply('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم اعطاء **');
		}
		if( args[0].toLowerCase() == "all" ){
			message.guild.members.forEach(m=>m.addRole( role1 ))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء الكل رتبة**');
		} else if( args[0].toLowerCase() == "bots" ){
			message.guild.members.filter(m=>m.user.bot).forEach(m=>m.addRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء البوتات رتبة**');
		} else if( args[0].toLowerCase() == "humans" ){
			message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.addRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء البشريين رتبة**');
		}
	}
});

client.on('message', message => { // Leaked by [ @M3a4x ]
  if (message.author.codes) return;
  if (!message.content.startsWith('$')) return;

  var command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

var args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');

  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**انت لا تملك الصلاحيات المطلوبه**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();

  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**يجب ان تكون رتبة البوت اعلي من رتبه الشخص المراد تبنيدة**");


  message.guild.member(user).ban(7, user);

message.channel.send(`**✅ ${user.tag} banned from the server ! ✈ **  `)

}
});

client.on('message', msg => { // Leaked by [ @M3a4x ]
  if (msg.author.bot) return;
  if (!msg.content.startsWith('$')) return;
  var command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);
  var args = msg.content.split(" ").slice(1);

    if(command === "clear") {
        const emoji = client.emojis.find("name", "wastebasket")
   var textxt = args.slice(0).join("");
    if(msg.member.hasPermission("MANAGE_MESSAGES")) {
    if (textxt == "") {
        msg.delete().then
    msg.channel.send("***```ضع عدد الرسائل التي تريد مسحه```***").then(m => m.delete(3000));
} else {
    msg.delete().then
    msg.delete().then
    msg.channel.bulkDelete(textxt);
        msg.channel.send("```php\nعدد الرسائل التي تم مسحها: " + textxt + "\n```").then(m => m.delete(3000));
        }
    }
}
});

client.login(process.env.BOT_TOKEN);
