const Router = require('koa-router')
const { getAllTag } = require('../config/db')

const router = new Router()

router.put('/tag',async(ctx)=>{
    const tag=await  getAllTag()
    ctx.body={
        status:1,
        data:tag
    }
})

module.exports = router; 