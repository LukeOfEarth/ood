const { helpAction } = require('./help');

const actions = {
    help: helpAction
};

const processAction = (payload, behavior, args = undefined) => {
    const action = actions[behavior.responseActionName];
    action(payload, behavior, args);
}

module.exports = {
    actions,
    processAction
}