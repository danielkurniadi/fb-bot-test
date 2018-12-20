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

const getResponses = ({ text:input_text, payload }) => {
	const {type, text, ...data} = FAQ.filter(messageResponse=> messageResponse.payload == payload)[0].reply();
	return {type, text, data};
};

module.exports = {
	getResponses,
	CONSTANT: { QUICK_REPLY, NORMAL_MESSAGE }
};