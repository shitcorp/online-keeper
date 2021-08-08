import { config } from "dotenv";
config();
import { Client } from "discord.js";

const client = new Client({
  intents: [],
});

// ready listener
client.on("ready", () => {
  console.log("Ready! " + client.user.username + " is listening for commands");
});

//login client with token from process.env
client.login(process.env.DISCORD_TOKEN);
