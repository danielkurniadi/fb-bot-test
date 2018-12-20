module.exports = {
	title: 'What is NTU?', // The title of the quick reply button
	payload: 'FAQ_ADMINISTRATION',
	reply: () => {
		return {
			type: 'NORMAL_MESSAGE',
			text: "It is not that complicated to apply to NTU! Let us show you how. Here are some brief steps:\n \
				1. Apply Online\n \
				2. Submit Documents Online\n \
				3. University Entrance Examination (UEE)\n \
				More information can be found here:\n \
				https://some.ntu.url.edu.sg/",
		};
	}
};
