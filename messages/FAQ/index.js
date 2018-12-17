// import
const FAQ_NTU = require('./1what_is_ntu')

const FAQ_MAIN = {
	title: 'FAQ', // The title of the quick reply button
	payload: 'GET_FAQ',
	reply: () => {
		return {
			type: 'QUICK_REPLY',
			text: 'How can we help you? Here are some FAQ for you ...',
			// this faq's quickReply need to be hooked automatically
			// with the 1what_is_ntu folder since
			// the payload is 'WHAT_IS_NTU'
			quickReply: ['FAQ_ADMINISTRATION', 'FAQ_FINANCIAL', 'FAQ_NTU']
		};
	}
}

module.exports = {
	FAQS : {FAQ_MAIN, FAQ_NTU}
};
