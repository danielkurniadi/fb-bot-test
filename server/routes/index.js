const fbMessageController = require('../controller/facebook/messageController');
const fbVerificationController = require('../controller/facebook/verificationController');

module.exports = router => {
	router.get('/fb_webhook', fbVerificationController);
	router.post('/fb_webhook', fbMessageController);
};
