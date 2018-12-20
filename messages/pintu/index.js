const WHO_ARE_WE = require('./who_are_we')
const MISI_VISI = require('./misi_visi')
const PROGRAM = require('./program')

const PINTU = {	
	title: 'PINTU', // The title of the quick reply button
	payload: 'GET_PINTU',
	reply: () => {
		return {
			type: 'QUICK_REPLY',
			text: 'How can we help you?',
			quickReplies: [WHO_ARE_WE, MISI_VISI, PROGRAM]
		};
	}
}

module.exports = [PINTU, WHO_ARE_WE, MISI_VISI, PROGRAM]