module.exports = {
	title: 'Misi & Visi', // The title of the quick reply button
	payload: 'MISI_VISI',
	reply: () => {
		return {
			type: 'NORMAL_MESSAGE',
			text: 'Misi & Visi kami ialah...',
		};
	}
};
