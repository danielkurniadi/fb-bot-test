/** 
 * TESTING: /model/message/message.js
 * processMessage
 * 
*/

const message = require('../server/model/message/message');
const getResponses = message.getResponses;


let mockInput = {text: "Hello World!", payload: "GET_FAQ"};
let result = getResponses(mockInput);
let quickReplies = result.data.quickReplies;


console.log("Result Object:\n",result);

var i = 1;

console.log("\nQR:")
quickReplies.forEach(quickRep => {
    console.log("Quick Response #", i);
    console.log("title:", quickRep.title);
    console.log("payload:", quickRep.payload);
    console.log("reply content:");
    console.log("\t type:", quickRep.reply().type)
    console.log("\t text:", quickRep.reply().text)
    console.log("end");
    i++;
});

console.log("Data from object:\n", result.data);
