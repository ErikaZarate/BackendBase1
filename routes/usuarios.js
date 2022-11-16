const {Router}=require("express")
const {getUsers, getUserByID,deleteUserByID,addUser,updateUserByUsuario, signIn, CambioContrasena} =require("../Controllers/usuarios")
const router=Router()
router.get("/",getUsers)
router.get("/id/:id",getUserByID)
router.post("/",addUser)
router.post("/signin",signIn)
router.post("/CambioContrasena",CambioContrasena)
router.put("/",updateUserByUsuario)
router.delete("/",deleteUserByID)

module.exports=router