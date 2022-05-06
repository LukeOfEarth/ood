const constructResponseWithMessage = (behavior, message) => {
    return {
        ...behavior,
        responseMessageText: message
    }
}

module.exports = {
    constructResponseWithMessage
}