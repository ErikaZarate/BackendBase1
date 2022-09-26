const {Router} = require("express")
const router =Router()
const{
    rootMessage,
    hiMessage,
    byeMessage,
    postMessage,
    putMessage,
    deleteMessage
} =require('../Controllers/messages.js)

router.get("/", rootMessage)
router.get("/hi", hiMessage)
router.get("/bye",byeMessage)

router.post('/',postMessage)
router.put('/',putMessage)
router.delete('/',deleteMessage)
module.exports = router