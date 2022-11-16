const {Router}=require("express")
const {getSmash, getSmashByID,deleteSmashByID,addSmash,updateUserSmash} =require("../Controllers/Smash")
const router=Router()
router.get("/",getSmash)
router.get("/id/:id",getSmashByID)
router.post("/",addSmash)

router.put("/",updateUserSmash)
router.delete("/",deleteSmashByID)

module.exports=router