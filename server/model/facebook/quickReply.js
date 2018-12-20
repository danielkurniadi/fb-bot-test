const createMessageQuickReply = ({ title, payload, reply, ...restProps }) => ({
	content_type: 'text',
	title,
	payload,
	...restProps
});

module.exports = {
	createMessageQuickReply
};
