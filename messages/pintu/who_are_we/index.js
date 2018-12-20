module.exports = {
	title: 'Siapakah Kita?', // The title of the quick reply button
	payload: 'WHO_ARE_WE',
	reply: () => {
		return {
			type: 'NORMAL_MESSAGE',
            text: 'PINTU is adalah organisasi pelajar Indonesia di Nanyang Technological University, Singapore.',
		};
	}
};
