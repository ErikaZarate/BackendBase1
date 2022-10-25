const {Router}=require("express")
const {getUsers, getUserByID,deleteUserByID,addUser} =require("../Controllers/usuarios")
const router=Router()
router.get("/",getUsers)
router.get("/id/:id",getUserByID)
router.post("/",addUser)
router.delete("/",deleteUserByID)

module.exports=router