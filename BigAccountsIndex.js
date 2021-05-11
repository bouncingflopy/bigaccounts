const Discord = require("discord.js");
const bot = new Discord.Client();
const config = require("./config.json");
const prefix = config.prefix;
const accountsFile = "https://docs.google.com/document/d/1GDX-VUwib7OG7qcaVrBzOLqSqaI-doDWc7JzUibZENE/edit?usp=sharing";

var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.get('/', function (request, response) {
    var result = 'App is running'
    response.send(result);
}).listen(app.get('port'), function () {
    console.log('App is running, server is listening on port ', app.get('port'));
});
bot.on("ready", () => {
    console.log(`Logged in as ${bot.user.tag}!`);
});

bot.on("message", message => {
    if (message.channel.id === config.botChannel) {
        if (message.author.bot) return;
        var command = message.content
            .toLowerCase()
            .slice(prefix.length)
            .split(" ")[0];

        if (command === "buy") {
            let amount = message.conent.toLowerCase().split(" ")[1];
            if (!amount[0]) return message.reply("Please provide amount of users");
            if (amount[0] !== parseInt(amount[0], 10)) return message.reply("Please provide an amount in numbers. For example: 123, not one hundred and twenty three.");
            let service = message.conent.toLowerCase().split(" ")[2];
            if (!serice[0]) return message.reply("Please provide a service. For help type " + prefix + "help");

            return message.reply("Here is your " + account + " accounts for the service " + service + ". Thanks for buying at Bigamer's! :)");
        }
        else if (command === "help") {
          return message.reply("**Commands:**\n\n" + prefix + "buy {amount} {service}\nUse this command to buy a certin amount of accounts of a service. Price per account: 10 cents.\n");

        }
        else {
          return message.reply("This command doesn't exist. Please try again, or type help for a list of commands.");

        }
    }
});

bot.login(config.token);
