const request = require('request');
const FACEBOOK_ACCESS_TOKEN = '<FB_TOKEN_HERE>';

const sendMessage = (senderId, message) => {
	request({
		url: 'https://graph.facebook.com/v2.6/me/messages',
		qs: { access_token: FACEBOOK_ACCESS_TOKEN },
		method: 'POST',
		json: {
			recipient: { id: senderId },
			message
		}
	});
};

module.exports = {
	sendMessage
};
