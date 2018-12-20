module.exports = [{	
	title: 'EVENTS', // The title of the quick reply button
	payload: 'GET_EVENTS',
	reply: () => {
		return {
			type: 'NORMAL_MESSAGE',
			text: "Currently there is no upcoming events from PINTU. Come back again next time!"
		};
	}
}]