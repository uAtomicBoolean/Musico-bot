/**
 * @author uAtomicBoolean
 * @description The handler for the 'ready' event.
 */

import { Bot } from 'src/lib/bot';


/**
 * Handler for the event.
 */
export async function execute(client: Bot) {
	client.log(`${client.user.username} is connected!`);
}


export const name = 'ready';
