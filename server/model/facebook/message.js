const { createMessageQuickReply } = require('./quickReply');
const { getResponse, CONSTANT } = require('../message/message');

const processMessage = event => {
	const { text, payload } = event;
	const result = getResponses({ payload, text });
	switch (result.type) {
		case CONSTANT.QUICK_REPLY:
			const quick_replies = result.quickReplies.map(createMessageQuickReply);
			return { text: result.text, quick_replies };
		case CONSTANT.NORMAL_MESSAGE:
			return { text: result.text };
		default:
			break;
	}
};	

module.exports = {
	processMessage
};
