const message = require('../server/model/facebook/message')
const processMessage = message.processMessage;

let normalEvent = {
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

let quickRepEvent = {
    "sender": {
        "id": "1254459154682919"
    },
    "recipient": {
        "id": "682498171943165"
    },
    "timestamp": 1502905976377,
    "message": {
        "quick_reply": {
        "payload": "DEVELOPER_DEFINED_PAYLOAD_FOR_PICKING_GREEN"
        },
        "mid": "m_AG5Hz2Uq7tuwNEhXfYYKj8mJEM_QPpz5jdCK48PnKAjSdjfipqxqMvK8ma6AC8fplwlqLP_5cgXIbu7I3rBN0P",
        "seq": 9767,
        "text": "Green"
    }
}

//

let responseNormal = processMessage(normalEvent);
console.log(responseNormal);

let responseQuickRep = processMessage(quickRepEvent);
console.log(quickRepEvent);
        


