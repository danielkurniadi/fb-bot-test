module.exports = {
	title: 'FAQ', // The title of the quick reply button
	payload: 'GET_FAQ',
	reply: () => {
		return {
			type: 'QUICK_REPLY',
			text: 'Here are some interesting faqs for you',
			// this faq's quickReply need to be hooked automatically
			// with the 1what_is_ntu folder since
			// the payload is 'WHAT_IS_NTU'
			quickReply: ['WHAT_IS_NTU']
		};
	}
};
