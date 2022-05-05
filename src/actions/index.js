const { helpAction } = require('./help');

const actions = {
    help: helpAction
};

const processAction = (payload, behavior) => {
    const action = actions[behavior.responseActionName];
    action(payload, behavior);
}

module.exports = {
    actions,
    processAction
}