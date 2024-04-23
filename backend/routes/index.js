const { Router }=require("express");
const router=Router();
const userRouter=require("./user");
const accountRouter=require("./account");

router.use("/user",userRouter);
router.use("/account",accountRouter);



router.get("/",(req,res)=>{
    res.send("hello from main side")
})










module.exports=router