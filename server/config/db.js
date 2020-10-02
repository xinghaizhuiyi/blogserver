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


//tag库

//搜索全部tag
async function getAllTag() {
    return tagModel.findAll({
        attributes: ['tag','quantity']
    })
}


//文章库

//按tag搜索
async function getAllBowen() {
    return bowenModel.findAll({
        attributes: ['tag','blogname','introduction']
    })
}

async function getTag(tag) {
    return bowenModel.findAll({
        attributes: ['blogname','introduction'],
        where: {
            tag
          }
    })
}

module.exports = {
    getAllTag,
    getTag,
    getAllBowen
}