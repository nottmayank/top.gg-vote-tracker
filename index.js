const express = require('express');
const topgg = require('@top-gg/sdk');
const { Client, Intents, MessageEmbed, WebhookClient } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

const config = require("./config.js"); 

const app = express();

const webhook = new topgg.Webhook(config.passward);

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

app.post('/webhook', webhook.listener(async vote => {
    const user = await client.api.users(vote.user).get().catch(() => null);
    if (!user) throw new Error('[API ERROR] Cannot find user.');

    const embed = new MessageEmbed()
    .setTitle("New vote received")
    .setURL(`https://discord.com/users/${vote.user}`)
    .setDescription(`${user.username}#${user.discriminator} has voted me on Top.gg`)
    .setColor("RANDOM");

    switch (config.logs.type) {
      case 1: {
        if (!config.logs.channel.id.length) throw new Error('[CONFIG ERROR] No channel ID was provided');
        const channel = client.channels.fetch(config.logs.channel.id);
        if (!channel) throw new Error("[DISCORD API ERROR] Couldn't find given channel ID");

        await client.channels.get(config.logs.channel.id).send({ embeds: [embed]});
      }
      case 2:
        if (!config.logs.webhook.id.length || !config.logs.webhook.token.length) throw new Error('[CONFIG ERROR] Webhook "ID" or "TOKEN" was not provided');

        const webhookClient = new WebhookClient({ id: config.logs.webhook.id, token: config.logs.webhook.token });

        return webhookClient.send({ embeds: [embed]});
    } 
}));

app.get("*", function (req, res) {
    res.send("<h1>This is not a website. By: <a href='https://github.com/nottmayank'>sonimayank</a></h1>");
});


var server = app.listen(config.port, function () {
    var host = server.address().address;
    var port = server.address().port;
    
    console.log("App listening at http://%s:%s", host, port)
});

process.on("unhandledRejection", (error) => {
  console.error(error);
});

process.on("uncaughtException", (error) => {
  console.error(error);
});

client.login(config.token);
