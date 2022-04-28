const express = require('express');
const topgg = require('@top-gg/sdk');
const { Client, Intents, MessageEmbed, WebhookClient } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

const config = require("./config.js"); // Importing config file

const app = express(); // Creating web server using express

const webhook = new topgg.Webhook(config.passward);

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

app.post('/webhook', webhook.listener(async vote => {
    const user = await client.api.users(vote.user).get().catch(() => null);
    if (config.logs.type == 1) {
        if (!config.logs.channel.id.length) throw new Error('[CONFIG ERROR] No channel ID was provided');
        else {
            const channel = client.channels.fetch(config.logs.channel.id);
            if (!channel) throw new Error("[DISCORD API ERROR] Couldn't find given channel ID");
            else {
                const embed = new MessageEmbed()
                .setTitle("New vote received")
                .setURL(`https://discord.com/users/${vote.user}`)
                .setDescription(`${user.username}#${user.discriminator} has voted me on Top.gg`)
                .setColor("RANDOM");

                await client.channels.get(config.logs.channel.id).send({ embeds: [embed]});
                return true;
            }
        }
    }
    if (config.logs.type == 2) {
        if (!config.logs.webhook.id.length || !config.logs.webhook.token.length) throw new Error('[CONFIG ERROR] Webhook "ID" or "TOKEN" was not provided');
        else {
            const embed = new MessageEmbed()
            .setTitle("New vote received")
            .setURL(`https://discord.com/users/${vote.user}`)
            .setDescription(`${user.username}#${user.discriminator} has voted me on Top.gg`)
            .setColor("RANDOM");

            const webhookClient = new WebhookClient({ id: config.logs.webhook.id, token: config.logs.webhook.token });

            webhookClient.send({ embeds: [embed]});
            return true;
        }
    }
    else throw new Error('[CONFIG ERROR] Invalid "type" was provided');
}));

app.get("*", function (req, res) {
    res.send("<h1>This is not a website. Made by Frenzy#1320");
});


var server = app.listen(config.port, function () {
    var host = server.address().address;
    var port = server.address().port;
    
    console.log("App listening at http://%s:%s", host, port)
});

client.login(config.token);