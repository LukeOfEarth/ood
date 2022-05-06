const { processSendMessage } = require('../messages/send');
const { constructResponseWithMessage } = require('../common/response');
const { getAllShops } = require('../shops');

const listAction = (payload, behavior, args) => {
    const key = args[0];
    const listFunc = argList.find(a => a.key === key);
    const responseText = listFunc();

    const responseBehavior = constructResponseWithMessage(behavior, responseText);

    processSendMessage(payload, responseBehavior);
}

const listShops = () => {
    const shops = getAllShops();
    let response = '';

    shops.forEach(shop => {
        response += shop.name + ' - ' + shop.type + '\n' 
    });

    return response;
}

const argList = [
    {
        key: 'shops',
        list: listShops
    }
]

module.exports = {
    listAction, listShops
}