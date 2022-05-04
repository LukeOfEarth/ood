const { handleCommand, checkForCommand } = require('../commands/commands');

const processReceiveMessage = (payload) => {
    if(payload.author.bot) return;

    const hasCommand = checkForCommand(payload.content);
    if(hasCommand) {
        handleCommand(payload);
        return;
    }

    
}

module.exports = {
    processReceiveMessage
}