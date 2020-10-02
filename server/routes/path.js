const Router = require('koa-router')
const { getAllTag, getTag,getAllBowen } = require('../config/db')

const router = new Router()

router.get('/tag', async (ctx) => {
    const tag = await getAllTag()
    ctx.body = {
        status: 'ok',
        data: tag
    }
})

router.get('/tag/:blogTag', async (ctx) => {
    let tagMatch = /([^/]+)$/
    let blogTag = ctx.request.url.match(tagMatch)
    const tagbowen = await getTag(blogTag)
    ctx.body = {
        status: 'ok',
        data: tagbowen
    }
})

router.get('/bowen', async (ctx) => {
    const bowen = await getAllBowen()
    ctx.body = {
        status: 'ok',
        data: bowen
    }
})

module.exports = router; 