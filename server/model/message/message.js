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
const getResponse = ({ text, payload }) => {};

module.exports = {
	getResponse,
	CONSTANT: { QUICK_REPLY, NORMAL_MESSAGE }
};
