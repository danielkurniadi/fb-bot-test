module.exports = {
	title: 'Program PINTU 2019', // The title of the quick reply button
	payload: 'PROGRAM',
	reply: () => {
		return {
			type: 'NORMAL_MESSAGE',
			text: 'Program berencana kami di tahun 2019 sebagai berikut ...',
		};
	}
};
