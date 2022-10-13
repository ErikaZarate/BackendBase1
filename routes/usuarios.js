const {Router}=require("express")
const {getUsers} =require("../Controllers/usuarios")
const router=Router()
router.get("/",getUsers)
module.exports=router