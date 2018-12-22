const request = require('request');
const FACEBOOK_ACCESS_TOKEN = 'EAAC6PMEYsZCcBAAZChJsFZBKreo8NwYu2S3ADROMcM0gKZAyQnqg6PsuZAiokMdweUchBvDwAb1JocPVon6FmGkJre97ZAYlBYWW4E2aUwpzOsciSr0dYyWE6MSHtJXsu1WAUQyXPcVEeb7BXLjZAZBhYZBGY3HRQeFnIWzwcAYd1lwZDZD';

const sendMessage = (senderId, message) => {
	console.log("message to send", message);
	request({
		url: 'https://graph.facebook.com/v2.6/me/messages',
		qs: { access_token: FACEBOOK_ACCESS_TOKEN },
		method: 'POST',
		json: {
			recipient: { id: senderId },
			message: message
		}
	});
};

module.exports = {
	sendMessage
};
