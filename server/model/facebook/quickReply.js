const createMessageQuickReply = ({ title, payload, ...restProps }) => ({
	content_type: 'text',
	title,
	payload,
	...restProps
});

module.exports = {
	createMessageQuickReply
};
