// import
const WHAT_IS_NTU = require('./1what_is_ntu')
const ADMINISTRATION = require('./administration')

const FAQ = {
	title: 'FAQ', // The title of the quick reply button
	payload: 'GET_FAQ',
	reply: () => {
		return {
			type: 'QUICK_REPLY',
			text: 'How can we help you? Here are some FAQ for you ...',
			// this faq's quickReply need to be hooked automatically
			// with the 1what_is_ntu folder since
			// the payload is 'WHAT_IS_NTU'
			quickReplies: [WHAT_IS_NTU, ADMINISTRATION]
		};
	}
}

module.exports = [FAQ, WHAT_IS_NTU, ADMINISTRATION]