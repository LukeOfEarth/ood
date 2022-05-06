const { helpAction } = require('./help');
const { listAction } = require('./list');

const actions = {
    help: helpAction,
    list: listAction
};

const processAction = (payload, behavior, args = undefined) => {
    const action = actions[behavior.responseActionName];
    action(payload, behavior, args);
}

module.exports = {
    actions,
    processAction
}