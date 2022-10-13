const {Router}=require("express")
const {getUsers} =require("../controllers/usuarios")
const router=Router()
router.get("/",getUsers)
module.exports=router