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

const getQuickReply = (quickReply)=>{
	FAQ.forEach((message)=>{
		if (message.payload == quickReply){
			return message;
		}
	})
};

const getResponse = ({ text, payload }) => {
	FAQ.forEach((message)=>{
		if (message.payload == payload){
			const quickReplies = message.quickReply.map(getQuickReply);
			return quickReplies;
		}
	});
};

module.exports = {
	getResponse,
	getQuickReply,
	CONSTANT: { QUICK_REPLY, NORMAL_MESSAGE }
};