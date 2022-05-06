const { processSendMessage } = require('../messages/send');
const { commandList } = require('../constants/commandList');
const { constructResponseWithMessage } = require('../common/response');

const helpAction = (payload, behavior) => {
    const responseBehavior = constructResponseWithMessage(behavior, getHelpBody());
    processSendMessage(payload, responseBehavior);
}

const getHelpBody = () => {
    let text = 'See a list of commands for using the bot below:\n\n';
    commandList.forEach((item) => {
        text += '!' + item.command + ' - ' + item.description + '\n'
    });
    return text;
}

module.exports = {
    helpAction
}