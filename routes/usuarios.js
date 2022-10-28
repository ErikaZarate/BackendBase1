const {Router}=require("express")
const {getUsers, getUserByID,deleteUserByID,addUser,updateUserByUsuario} =require("../Controllers/usuarios")
const router=Router()
router.get("/",getUsers)
router.get("/id/:id",getUserByID)
router.post("/",addUser)
router.put("/",updateUserByUsuario)
router.delete("/",deleteUserByID)

module.exports=router