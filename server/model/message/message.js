/**
 * @typedef MessageResponse
 * @property {'QUICK_REPLY'|'NORMAL_MESSAGE'} type
 * @property {QuickReply|String} data
 */
const QUICK_REPLY = 'QUICK_REPLY';
const NORMAL_MESSAGE = 'NORMAL_MESSAGE';

/**
 * TODO:
 * Create getResponse function which iterates the `./messages` folder
 * then retrieve all the possible payload and text responses
 * based on the text and payload data
 *
 * @param {String} text
 * @param {String} payload
 * @return {MessageResponse} the message response
 */

const FAQ = require('../../../messages/faq');

const getResponses = ({ text, payload }) => {
	for(const key in Object.keys(FAQ)){
		const message = FAQ[key];

		// if a match found with our response pool
		if(message.payload == payload){
			const nextResponses = message.reply();
			return nextResponses;
		};
	};

	// if there is no match with our response pool
	return {};
};

module.exports = {
	getResponses,
	CONSTANT: { QUICK_REPLY, NORMAL_MESSAGE }
};