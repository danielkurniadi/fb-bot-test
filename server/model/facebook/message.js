const { createMessageQuickReply } = require('./quickReply');
const { getResponse, CONSTANT } = require('../message/message');

const processMessage = event => {
	const { text, payload } = event;
	const result = getResponses({ payload, text });
	switch (result.type) {
		case CONSTANT.QUICK_REPLY:
			const quickReplies = result.data.quickReplies.map(createMessageQuickReply);
			return { text: result.text, content_type: result.type, quick_replies: quickReplies };

		case CONSTANT.NORMAL_MESSAGE:
			return { text: result.text, content_type: result.type };

		default:
			return {};
	}
};	

module.exports = {
	processMessage
};
