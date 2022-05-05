const { commandList, defaultResponse } = require('../constants/commandList');
const { responseActionType } = require('../constants/constants');
const { processSendMessage } = require('../messages/send');
const { processAction } = require('../actions');

const handleCommand = (payload = undefined) => {
    if(!payload) return;

    const message = payload.content;
    const command = getCommand(message);
    processCommandBehavior(command, message, payload);
}

const checkForCommand = (message) => {
    if (message.substring(0, 1) === '!') {
        return true;
    } 

    return false;
}

const getCommand = (message) => message.slice(1,message.length).split(' ')[0];

const processCommandBehavior = (command, message, payload) => {
    let behavior = commandList.find(c => c.command === command);
    if(!behavior) behavior = defaultResponse;

    const args = message.split(' ').slice(1);

    switch(behavior.responseActionType) {
        case responseActionType.message:
            processSendMessage(payload, behavior);
            return;
        case responseActionType.action:
            processAction(payload, behavior, args);
            return;
    }
}

module.exports = {
    handleCommand,
    checkForCommand
}