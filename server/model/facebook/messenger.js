const request = require('request');
const FACEBOOK_ACCESS_TOKEN = 'EAAC6PMEYsZCcBAMb6ZCraMN1kvgcSphHPyDntXCfTmECNeWwKu0uJ9605ZBFfyF4E1vZA2yE2ssv3MsHL506Be6dJ2PU8kVFsLmnvT5aI6ZCZAMIXKowCh81xlbr69NB86CHOwbTUjIdwbel1UuoAZAfQKZBdwxxjyrr5hq1zhKeogZDZD';

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
