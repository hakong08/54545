const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'NzUwNzE5MjM0NjI3MjA3Mjk4.X0-nxQ.zIr6jUU1MCSXQL-AqP-vc6wnfWw';

client.on('ready', () => {
  console.log('켰다.');
});

client.on('message', (message) => {
  if(message.content === '안녕하세요.') {
    message.reply('안녕하세요! 무엇을 도와드릴까요?:) @하콩');
  }
});

client.login(token);
