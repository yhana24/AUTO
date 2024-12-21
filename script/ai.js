
const axios = require('axios');

module.exports.config = {
  name: 'ai',
  version: '1.0.0',
  role: 0,
  hasPrefix: false,
  aliases: ['globalGPT'],
  description: "An AI command powered by Neuronspike",
  usage: "Ai [text]",
  credits: 'Developer',
  cooldown: 3,
};

module.exports.run = async function({ api, event, args }) {
  const input = args.join(' ');
  if (!input) {
    api.sendMessage(`Hello there!\n\nI am an AI developed by Neuronspike. I am here to assist you with any questions or tasks you may have.\n\nusage: ai what is atom?`, event.threadID, event.messageID);
    return;
  }
  api.sendMessage(`Generating...`, event.threadID, event.messageID);
  try {
    const { data } = await axios.get(`https://api.easy-api.online/v1/globalgpt?q=${encodeURIComponent(input)}`);
    console.log(data); 
    const response = data.content; 
    
    const finalResponse = `✮𝙉𝙚𝙪𝙧𝙤𝙣𝙨𝙥𝙞𝙠𝙚 𝘼𝙞✮\n\n${response}`;
    api.sendMessage(finalResponse + '\n\nhttps://bit.ly/autobot189903', event.threadID, event.messageID);
  } catch (error) {
    api.sendMessage('An error occurred while processing your request, please try sending your question again', event.threadID, event.messageID);
    console.error(error); 
  }
};
