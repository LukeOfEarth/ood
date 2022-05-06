const { responseMessageType, responseActionType } = require('./constants');

const commandList = [
    {
        command: 'hi',
        responseMessageText: 'Greetings! We are open for business!',
        responseActionType: responseActionType.message,
        responseMessageType: responseMessageType.reply,
        description: 'Say hello'
    },
    {
        command: 'c',
        responseMessageText: 'testing channel',
        responseActionType: responseActionType.message,
        responseMessageType: responseMessageType.channel,
        description: 'Testing channel message'
    },
    {
        command: 'd',
        responseMessageText: 'testing dm',
        responseActionType: responseActionType.message,
        responseMessageType: responseMessageType.direct,
        description: 'Testing dm message'
    },
    {
        command: 'help',
        responseMessageText: '',
        responseActionType: responseActionType.action,
        responseMessageType: responseMessageType.direct,
        responseActionName: 'help',
        description: 'Get some help with using the bot'
    },
    {
        command: 'list',
        responseMessageText: '',
        responseActionType: responseActionType.action,
        responseMessageType: responseMessageType.direct,
        responseActionName: 'list',
        description: 'Lists something based on keyword supplied (e.g. !list shops)'
    }
]

const defaultResponse = {
    command: 'default',
    responseMessageText: 'Command not recognized! Try !help for a list of valid commands',
    responseActionType: responseActionType.message,
    responseMessageType: responseMessageType.reply
}

module.exports = {
    commandList,
    defaultResponse
}