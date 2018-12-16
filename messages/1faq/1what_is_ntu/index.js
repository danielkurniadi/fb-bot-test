module.exports = {
	title: 'What is NTU?', // The title of the quick reply button
	payload: 'WHAT_IS_NTU',
	reply: () => {
		return {
			type: 'NORMAL_MESSAGE',
			text: 'NTU is ...'
		};
	}
};
