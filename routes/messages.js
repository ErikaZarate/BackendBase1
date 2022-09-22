const {Router} = require("express")
const router =Router()
const{rootMessage,hiMessage,byeMessage} = require('../Controllers/messages')

router.get("/", rootMessage)

router.get("/hi", hiMessage)

router.get("/bye",byeMessage)

module.exports = router