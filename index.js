// Import some modules into the global scope
global.Discord = require("discord.js");
global.path = require("path");
global.fs = require("fs").promises;

// Initialize client instance
const client = new Discord.Client();

// Define some global variables
global.APP_ROOT = __dirname;
global.client = client;
global.config = {};
global.MessageEmbed = Discord.MessageEmbed;

// Log in with the token in the enviroment file
client.login(process.env.CLIENT_SECRET);

// When the client logs in, initialize the client runtime.
client.on("ready", require("./src/ClientRuntime.js"));
