const request = require('request');
const FACEBOOK_ACCESS_TOKEN = 'EAAC6PMEYsZCcBAJFn5ZAkUPQva013oOldOBu3hFe9rwlEMsQCXGbXWOxi9SR4dABL7fKrlGAJ6G20LxgddLG6nXGZCEOceTVDM9BXzpCbVAUS4ifFN49Tt8bJXS5vzkOS6VB6gXO71xvhZAyUZCHlNM6xmq5WjjU9lph18yVy0AZDZD';

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
