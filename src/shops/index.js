const { readAllJSONFilesInDir } = require('../common/file');

const getAllShops = () => readAllJSONFilesInDir(__dirname);

const getShopById = (id) => {
    const shops = getAllShops();
    return shops.find(s => s.id = id);
}

module.exports = {
    getAllShops,
    getShopById
}