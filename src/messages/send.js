const { responseMessageType } = require('../constants/constants')

const processSendMessage = (originalPayload, responseBehavior) => {
    switch(responseBehavior.responseMessageType) {
        case responseMessageType.channel:
            sendChannelMessage(originalPayload, responseBehavior);
            return;
        case responseMessageType.direct:
            sendDirectMessage(originalPayload, responseBehavior);
            return;
        case responseMessageType.reply:
            sendReplyMessage(originalPayload, responseBehavior);
            return;
    }
}

const sendChannelMessage = (originalPayload, responseBehavior) => {
    originalPayload.channel.send(responseBehavior.responseMessageText);
}

const sendDirectMessage = (originalPayload, responseBehavior) => {
    originalPayload.author.send(responseBehavior.responseMessageText);
}

const sendReplyMessage = (originalPayload, responseBehavior) => {
    originalPayload.reply(responseBehavior.responseMessageText);
}

module.exports = {
    processSendMessage
}