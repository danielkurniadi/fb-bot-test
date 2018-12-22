const { createMessageQuickReply } = require('./quickReply');
const { getResponses, CONSTANT } = require('../message/message');

const parseEvent = event=>{
	let text = event.message.text;
	let payload = null;
	// if webhook event comes from quick reply (quick_reply)
	const quick_reply = event.message.quick_reply;
	if(quick_reply){
		payload = quick_reply.payload;
		return { payload, text};
	}
	// if webhook event comes from button (array<attachement>)
	const attachments = event.message.attachments;
	if(attachments){
		payload = attachments[0].payload;
		return { payload, text };
	}
	return { payload, text };
};

const processMessage = event => {
	// TODO: What if the event doesn't contain payload?
	const { payload, text } = parseEvent(event);
	const result = getResponses({ payload, text });

	switch (result.type) {
		case CONSTANT.QUICK_REPLY:
			// parse data to quick_replies 
			const quickReplies = result.data
				.quickReplies
				.map(createMessageQuickReply);
			return { text: result.text, content_type: result.type, quick_replies: quickReplies };

		case CONSTANT.NORMAL_MESSAGE:
			return { text: result.text + " from testbot!"};

		default:
			return {text: "Hello World", content_type:"text"};
	}
};	

module.exports = {
	processMessage
};
