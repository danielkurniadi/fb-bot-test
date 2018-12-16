const { createMessageQuickReply } = require('./quickReply');
const { getResponse, CONSTANT } = require('../message/message');

const processMessage = message => {
	const { text, payload } = message;
	const result = getResponse({ payload, text });
	switch (result.type) {
		case CONSTANT.QUICK_REPLY:
			return createMessageQuickReply(result);
		case CONSTANT.NORMAL_MESSAGE:
			return { text: result.data };
		default:
			break;
	}
};

module.exports = {
	processMessage
};
