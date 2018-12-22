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

const responses = require('../../../messages/faq');

const getResponses = ({ text: inputText, payload }) => {
	if(payload){ // check if payload is valid/defined
		const matchingResponses = responses.filter(response => response.payload == payload);
		if(Array.isArray(matchingResponses) && matchingResponses.length){ // check if there is a matching message(s) as response(s)
			const {type, text, ...data} = matchingResponses[0].reply();
			return {type, text, data};
		}
	}
	// if event has no payload or if there is not matching with any response
	return {type: NORMAL_MESSAGE, text: inputText};
};

module.exports = {
	getResponses,
	CONSTANT: { QUICK_REPLY, NORMAL_MESSAGE }
};

