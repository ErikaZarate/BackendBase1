const {Router}=require("express")
const {getUsers, getUserByID,deleteUserByID} =require("../Controllers/usuarios")
const router=Router()
router.get("/",getUsers)
router.get("/id/:id",getUserByID)
router.delete("/",deleteUserByID)
module.exports=router