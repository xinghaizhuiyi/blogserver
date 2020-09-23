const Router = require('koa-router')
const { getAllTag, getTag } = require('../config/db')

const router = new Router()

router.put('/tag', async (ctx) => {
    const tag = await getAllTag()
    ctx.body = {
        status: 1,
        data: tag
    }
})

router.get('/tag/:blogTag', async (ctx) => {
    let tagMatch = /([^/]+)$/
    let blogTag = ctx.request.url.match(tagMatch)
    const tag = await getTag(blogTag)
    ctx.body = {
        status: 1,
        data: tag
    }
})

module.exports = router; 