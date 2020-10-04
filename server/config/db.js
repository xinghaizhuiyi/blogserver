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
        attributes: ['tag', 'quantity']
    })
}


//文章库

//获取文章数量
async function getBowenCount(page) {
    jump=(page - 1) * 10
    console.log(page)
    return bowenModel.findAndCountAll({

        attributes: ['tag', 'blogname', 'introduction'],
        offset: jump,
        limit: 10,
    })
}

//搜索全部文章
async function getAllBowen() {
    return bowenModel.findAll({
        attributes: ['tag', 'blogname', 'introduction']
    })
}

//按tag搜索
async function getTag(tag) {
    return bowenModel.findAll({
        attributes: ['blogname', 'introduction'],
        where: {
            tag
        }
    })
}

module.exports = {
    getAllTag,
    getTag,
    getAllBowen,
    getBowenCount
}