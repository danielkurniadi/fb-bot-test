const message = require('../server/model/facebook/message')
const processMessage = message.processMessage;

let event = {
    "sender": {
        "id": "1978239305623940"
    },
    "recipient": {
        "id": "337760620145849"
    },
    "timestamp": 1545372406189,
    "message": {
        "mid": "_aiVhMQFdYNuNKLw0zBckReEuKAeNGreoEvfRANWhqnkEDr8Z_00p4xo0Vf1UfR7oJG9SmTPrCKgsqKLFs4Sjw",
        "seq": 3972,
        "text": "What is NTU?",
        
    }
}
