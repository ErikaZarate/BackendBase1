const {Router}=require("express")
const {getUsers, getUserByID} =require("../Controllers/usuarios")
const router=Router()
router.get("/",getUsers)
router.get("/id/:id",getUserByID)
module.exports=router