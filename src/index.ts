import {GatewayIntentBits, Partials} from 'discord.js';
import {guildId, token} from '@src/config.json';
import {Bot} from '@lib/bot';


// You must use your own intents and partials for the bot to run properly.
const client = new Bot({
	intents: [
		GatewayIntentBits.GuildVoiceStates,
	],
	partials: [
		Partials.Channel,
		Partials.GuildMember,
		Partials.User,
	],
});


// Adding a listener for the nodejs' errors not handled.
process.on('unhandledRejection', error => {
	client.log('Error not handled !', 1);
	console.error(error);
});


(async () => {
	await client.start(token);

	if (process.argv.includes('-L')) {
		await client.uploadCommands();
	}
	else if (process.argv.includes('-l')) {
		await client.uploadCommands(guildId);
	}
})();
