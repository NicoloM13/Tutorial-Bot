const Discord = require("discord.js")
const client = new Discord.Client(
    {
        intents:[
            "Guilds", "GuildMessages"
        ]
    }
)

client.login("MTExNzM4MDQxODQzNDUwMjc2OQ.G_Lqjt.rD9jrsEG0HUWMnvP0R1FEGfjkUPTMZAtXyTiis")