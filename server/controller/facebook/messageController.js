const message = require('../../model/facebook/message');
const messenger = require('../../model/facebook/messenger')

module.exports = function(req, res) {
	let body = req.body;
	console.log("messageController.js - body ",body)
	// Checks this is an event from a page subscription
	if (body.object === 'page') {
		// Iterates over each entry - there may be multiple if batched
		body.entry.forEach(function(entry) {
			// Gets the message. entry.messaging is an array, but
			// will only ever contain one message, so we get index 0
			if(entry.messaging){
				let webhookEvent = entry.messaging[0];
				let processedMessage = message.processMessage(webhookEvent);
				let senderId = webhookEvent.sender.id;							
				// send message
				messenger.sendMessage(senderId, processedMessage);
			}
		});
		// Returns a '200 OK' response to all requests
		res.status(200).end();
	} else {
		// Returns a '404 Not Found' if event is not from a page subscription
		console.log('event failed');
		res.sendStatus(404);
	}
};
