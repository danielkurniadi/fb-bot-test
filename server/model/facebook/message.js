const { createMessageQuickReply } = require('./quickReply');
const { getResponse, CONSTANT } = require('../message/message');

const parseEvent = event=>{
	const text = event.text;
	const payload = event.message.quick_replies.payload;
	return { payload, text }
};

const processMessage = event => {
	// TODO: What if the event doesn't contain payload?
	const { payload, text } = parseEvent(event);
	const result = getResponses({ payload, text });

	switch (result.type) {
		case CONSTANT.QUICK_REPLY:
			const quickReplies = result.data
				.quickReplies
				.map(createMessageQuickReply);
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
