const Sequelize = require('sequelize');
const TagModel = require('../model/blogtag');
const BowenModel = require('../model/bowen');

// Option 1: Passing parameters separately
const sequelize = new Sequelize('blog', 'root', '990808', {
    host: 'localhost',
    dialect: 'mysql',
})

const tagModel = TagModel(sequelize);
const bowenModel = BowenModel(sequelize);

async function getAllTag() {
    return tagModel.findAll({
        attributes: ['tag','quantity']
    })
}

async function getTag(tag) {
    return bowenModel.findAll({
        attributes: ['bowen'],
        where: {
            tag
          }
    })
}

module.exports = {
    getAllTag,
    getTag
}