const {Router}=require("express")
const {getUsers, getUserByID,deleteUserByID,addUser,updateUserByUsuario, signIn} =require("../Controllers/usuarios")
const router=Router()
router.get("/",getUsers)
router.get("/id/:id",getUserByID)
router.post("/",addUser)
router.post("/signin",signIn)
router.put("/",updateUserByUsuario)
router.delete("/",deleteUserByID)

module.exports=router