const { responseMessageType, responseActionType } = require('./constants');

const commandList = [
    {
        command: 'hi',
        responseMessageText: 'Greetings! We are open for business!',
        responseActionType: responseActionType.message,
        responseMessageType: responseMessageType.reply
    },
    {
        command: 'c',
        responseMessageText: 'testing channel',
        responseActionType: responseActionType.message,
        responseMessageType: responseMessageType.channel
    },
    {
        command: 'd',
        responseMessageText: 'testing dm',
        responseActionType: responseActionType.message,
        responseMessageType: responseMessageType.direct
    },
]

const defaultResponse = {
    command: 'default',
    responseMessageText: 'Command not recognized!',
    responseActionType: responseActionType.message,
    responseMessageType: responseMessageType.reply
}

module.exports = {
    commandList,
    defaultResponse
}