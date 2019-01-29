const Discord = require('discord.js')
const client =  new Discord.Client();
const prefix = "-";


    client.login(process.env.SELLER);



client.on('ready' , () => {
  console.log('Tackota');
client.user.setGame(`تم تطويره من قبل IiKaRèèèèèèèM#0001`);
client.user.setStatus(`dnd`);
});




client.on('message', message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;
  if(message.content.startsWith(prefix)){
    if(message.content.indexOf(prefix) !== 0) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    if(command === `vote`){
      if(!args[0]) return message.reply(`**Vote for what?**`);
      if(!args[1]) return message.reply(`**Spofic 1st thing to vote!**`);
      if(!args[2]) return message.reply(`**Spofic 2nd thing to vote!**`);
      if(!args[3]) return message.reply(`**Spofic 3rd thing to vote!**`);
      if(!args[4]) return message.reply(`**Spofic 1st emoji to vote!**`);
      if(!args[5]) return message.reply(`**Spofic 2nd emoji to vote!**`);
      if(!args[6]) return message.reply(`**Spofic 3rd emoji to vote!**`);
      var embed = new Discord.RichEmbed()
      .setDescription(`Vote For ${args[0]}`)
      .addField(`${args[4]} : ${args[1]}`, `**${args[5]} : ${args[2]}**`)
      .addField(`${args[6]} : ${args[3]}`, `** **`)
      message.channel.send({embed});
      embed.react(`${args[4]}`);
      embed.react(`${args[5]}`);
      embed.react(`${args[6]}`);
    }
  }
});


client.on('guildMemberAdd', m => {
    let welcome = m.guild.channels.find('name', "ps-log");
    const millis = new Date().getTime() - m.user.createdAt.getTime();
    const now = new Date();
    const createdAt = millis / 1000 / 60 / 60 / 24;
    var embed = new Discord.RichEmbed()
    .setAuthor(m.user.tag, m.user.avatarURL)
    .setDescription(`**تاريخ دخولك للديسكورد قبل ${createdAt.toFixed(0)} يوم\nانت العضو رقم ${m.guild.memberCount}**`)
    .setColor("GREEN")
    m.sendEmbed(embed);
    welcome.send({embed});
});


client.on('message', message => {
  if(message.content.startsWith(`${prefix}bot`)){
    let upTime = process.uptime();
    let days = Math.floor(upTime / 86400);
    upTime %= 86400;
    let hours = Math.floor(upTime / 3600);
    upTime %= 3600;
    let minutes = Math.floor(upTime / 60);
    let secounds = Math.floor(upTime % 60);
    var embed = new Discord.RichEmbed()
    .setAuthor(client.user.tag, client.user.avatarURL)
    .setDescription(`\n<:twitter:537618350898020352> [Twitter](https://twitter.com/9f4res)\n`)
    .addField(`:pushpin: Prefix`, ` **${prefix}**`)
    .addField(`:busts_in_silhouette: Users`, `**${message.guild.memberCount}**`)
    .addField(`:clock: UpTime`, `**${days} Days, ${hours} hrs, ${minutes} min, ${secounds} sec.**`)
    .setTimestamp()
    .setColor("PURPLE")
    .setFooter(`${client.user.tag}`)
    message.channel.send({embed});
  }
});



/* ======================================================================================= */

client.on('message', async (message) => {

    if (message.content.startsWith(prefix + 'discord')) {
              if(!message.member.roles.find('name', "T | Seller")) return message.reply(`**I can't complete this command because you don't have T | Seller Rank!**`);

      await message.channel.send("**وش الشي يللي بتبيعه؟**").then(e => {
      let filter = m => m.author.id === message.author.id
      let lan = '';
      let md = '';
      let br = '';
      let chaLan = message.channel.awaitMessages(filter, { max: 1, time: 400000, errors: ['time'] })
        .then(collected => {
          lan = collected.first().content
          collected.first().delete()
          e.delete();
          message.channel.send('**كم الكمية؟**').then(m => {
          let chaMd = message.channel.awaitMessages(filter, { max: 1, time: 400000, errors: ['time'] })
          .then(co => {
            md = co.first().content
            co.first().delete()
            m.delete();
            message.channel.send('**كم السعر؟**').then(ms => {
            let br = message.channel.awaitMessages(filter, { max: 1, time: 400000, errors: ['time'] })
              .then(col => {
                br = col.first().content
                col.first().delete()
                ms.delete()
                  message.channel.send('**جاري العرض ..**').then(b => {
                  setTimeout(() => { 
                    b.edit(`**تم العرض **`)
                  },2000);
                  var gg = message.guild.channels.find('name', 'discord📣')
                  if(!gg) return;

                      var embed = new Discord.RichEmbed()
                        .setAuthor(`عرض جديد`)
                        .setDescription(` ***~~================================~~*** \n \n  ***لا تنسى تجيب وسيط\nاذا نسيت حنا مو مسؤولين\n عن اي عمليه نصب *** \n \n ** ~~-----------------------------~~ \n The Seller : <@${message.author.id}> \n ~~-----------------------------~~ \n \n  Item :   ${lan} \n \n  Quantity :  ${md} \n \n  Price :  ${br} \n \n ** ***~~================================~~***   `)
                        .setFooter(`Tree Shop`)
                        .setTimestamp()
                        gg.send(`@here`);
                        gg.send({embed});
                  })
                })
              })
            })
          })
        })
      })
    }
  })


/* ======================================================================================= */


client.on('message', async (message) => {

    if (message.content.startsWith(prefix + 'tags')) {
              if(!message.member.roles.find('name', "T | Seller")) return message.reply(`**I can't complete this command because you don't have T | Seller Rank!**`);

      await message.channel.send("**وش الشي يللي بتبيعه؟**").then(e => {
      let filter = m => m.author.id === message.author.id
      let lan = '';
      let md = '';
      let br = '';
      let chaLan = message.channel.awaitMessages(filter, { max: 1, time: 400000, errors: ['time'] })
        .then(collected => {
          lan = collected.first().content
          collected.first().delete()
          e.delete();
          message.channel.send('**كم الكمية؟**').then(m => {
          let chaMd = message.channel.awaitMessages(filter, { max: 1, time: 400000, errors: ['time'] })
          .then(co => {
            md = co.first().content
            co.first().delete()
            m.delete();
            message.channel.send('**كم السعر؟**').then(ms => {
            let br = message.channel.awaitMessages(filter, { max: 1, time: 400000, errors: ['time'] })
              .then(col => {
                br = col.first().content
                col.first().delete()
                ms.delete()
                  message.channel.send('**جاري العرض ..**').then(b => {
                  setTimeout(() => { 
                    b.edit(`**تم العرض **`)
                  },2000);
                  var gg = message.guild.channels.find('name', 'tags📣')
                  if(!gg) return;

                      var embed = new Discord.RichEmbed()
                        .setAuthor(`عرض جديد`)
                        .setDescription(` ***~~================================~~*** \n \n  ***لا تنسى تجيب وسيط\nاذا نسيت حنا مو مسؤولين\n عن اي عمليه نصب *** \n \n ** ~~-----------------------------~~ \n The Seller : <@${message.author.id}> \n ~~-----------------------------~~ \n \n  Item :   ${lan} \n \n  Quantity :  ${md} \n \n  Price :  ${br} \n \n ** ***~~================================~~***   `)
                        .setFooter(`Tree Shop`)
                        .setTimestamp()
                        gg.send(`@here`);
                        gg.send({embed});
                  })
                })
              })
            })
          })
        })
      })
    }
  })

/* ======================================================================================= */




client.on('message', async (message) => {

    if (message.content.startsWith(prefix + 'accounts')) {
              if(!message.member.roles.find('name', "T | Seller")) return message.reply(`**I can't complete this command because you don't have T | Seller Rank!**`);

      await message.channel.send("**وش الشي يللي بتبيعه؟**").then(e => {
      let filter = m => m.author.id === message.author.id
      let lan = '';
      let md = '';
      let br = '';
      let chaLan = message.channel.awaitMessages(filter, { max: 1, time: 400000, errors: ['time'] })
        .then(collected => {
          lan = collected.first().content
          collected.first().delete()
          e.delete();
          message.channel.send('**كم الكمية؟**').then(m => {
          let chaMd = message.channel.awaitMessages(filter, { max: 1, time: 400000, errors: ['time'] })
          .then(co => {
            md = co.first().content
            co.first().delete()
            m.delete();
            message.channel.send('**كم السعر؟**').then(ms => {
            let br = message.channel.awaitMessages(filter, { max: 1, time: 400000, errors: ['time'] })
              .then(col => {
                br = col.first().content
                col.first().delete()
                ms.delete()
                  message.channel.send('**جاري العرض ..**').then(b => {
                  setTimeout(() => { 
                    b.edit(`**تم العرض **`)
                  },2000);
                  var gg = message.guild.channels.find('name', 'accounts📣')
                  if(!gg) return;

                      var embed = new Discord.RichEmbed()
                        .setAuthor(`عرض جديد`)
                        .setDescription(` ***~~================================~~*** \n \n  ***لا تنسى تجيب وسيط\nاذا نسيت حنا مو مسؤولين\n عن اي عمليه نصب *** \n \n ** ~~-----------------------------~~ \n The Seller : <@${message.author.id}> \n ~~-----------------------------~~ \n \n  Item :   ${lan} \n \n  Quantity :  ${md} \n \n  Price :  ${br} \n \n ** ***~~================================~~***   `)
                        .setFooter(`Tree Shop`)
                        .setTimestamp()
                        gg.send(`@here`);
                        gg.send({embed});
                  })
                })
              })
            })
          })
        })
      })
    }
  })


/* ======================================================================================= */


client.on('message', async (message) => {

    if (message.content.startsWith(prefix + 'design')) {
              if(!message.member.roles.find('name', "T | Seller")) return message.reply(`**I can't complete this command because you don't have T | Seller Rank!**`);

      await message.channel.send("**وش الشي يللي بتبيعه؟**").then(e => {
      let filter = m => m.author.id === message.author.id
      let lan = '';
      let md = '';
      let br = '';
      let chaLan = message.channel.awaitMessages(filter, { max: 1, time: 400000, errors: ['time'] })
        .then(collected => {
          lan = collected.first().content
          collected.first().delete()
          e.delete();
          message.channel.send('**كم الكمية؟**').then(m => {
          let chaMd = message.channel.awaitMessages(filter, { max: 1, time: 400000, errors: ['time'] })
          .then(co => {
            md = co.first().content
            co.first().delete()
            m.delete();
            message.channel.send('**كم السعر؟**').then(ms => {
            let br = message.channel.awaitMessages(filter, { max: 1, time: 400000, errors: ['time'] })
              .then(col => {
                br = col.first().content
                col.first().delete()
                ms.delete()
                  message.channel.send('**جاري العرض ..**').then(b => {
                  setTimeout(() => { 
                    b.edit(`**تم العرض **`)
                  },2000);
                  var gg = message.guild.channels.find('name', 'design📣')
                  if(!gg) return;

                      var embed = new Discord.RichEmbed()
                        .setAuthor(`عرض جديد`)
                        .setDescription(` ***~~================================~~*** \n \n  ***لا تنسى تجيب وسيط\nاذا نسيت حنا مو مسؤولين\n عن اي عمليه نصب *** \n \n ** ~~-----------------------------~~ \n The Seller : <@${message.author.id}> \n ~~-----------------------------~~ \n \n  Item :   ${lan} \n \n  Quantity :  ${md} \n \n  Price :  ${br} \n \n ** ***~~================================~~***   `)
                        .setFooter(`Tree Shop`)
                        .setTimestamp()
                        gg.send(`@here`);
                        gg.send({embed});
                  })
                })
              })
            })
          })
        })
      })
    }
  })
