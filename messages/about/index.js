module.exports = {	
	title: 'ABOUT', // The title of the quick reply button
	payload: 'GET_ABOUT',
	reply: () => {
		return {
			type: 'NORMAL_MESSAGE',
			text: 'PINTU is an Indonesian student organization in NTU.'
		};
	}
}