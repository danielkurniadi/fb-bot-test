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

const getResponses = ({ text:input_text, payload }) => {
	// TODO: what if the webhook Event doesn't contain payload?
	if(payload){
		const matchingResponses = responses.filter(response => response.payload == payload);
		const {type, text, ...data} = matchingResponses[0].reply();
		return {type, text, data};
	}
	return {type: NORMAL_MESSAGE, text: "Hello World!"};
};

module.exports = {
	getResponses,
	CONSTANT: { QUICK_REPLY, NORMAL_MESSAGE }
};