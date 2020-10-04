const Router = require('koa-router')
const { getAllTag, getTag,getAllBowen,getBowenCount } = require('../config/db')

const router = new Router()

router.get('/tag', async (ctx) => {
    const tag = await getAllTag()
    ctx.body = {
        status: 'ok',
        data: tag
    }
})

router.get('/tag/:blogTag', async (ctx) => {
    let tagMatch = /([^/]+)$/g
    let blogTag = ctx.request.url.match(tagMatch)
    const tagbowen = await getTag(blogTag)
    ctx.body = {
        status: 'ok',
        data: tagbowen,
        abc:blogTag
    }
})

router.get('/bowen', async (ctx) => {
    const bowen = await getBowenCount(1)
    ctx.body = {
        status: 'ok',
        data: bowen
    }
})
    
router.get('/bowen/:page', async (ctx) => {
    let pageMatch = /([^/]+)$/g
    let page = ctx.request.url.match(pageMatch)
    const bowen = await getBowenCount(page)
    ctx.body = {
        status: 'ok',
        data: bowen
    }
})
module.exports = router; 