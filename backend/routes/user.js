const { Router }=require("express");
const {User , Account}=require('../db')
const router=Router();
const jwt=require("jsonwebtoken");
const { authMiddleware }=require("../middleware/index");
const zod=require("zod");
const {JWT_SECRET}=require("../config");

const updateBody=zod.object({
    password:zod.string().optional(),
    firstName:zod.string().optional(),
    lastName:zod.string().optional(),
})


router.get("/bulk",async(req,res)=>{
    const filter=req.query.filter || "";

    const users= await User.find({
        $or:[
            {
                firstName:{
                    "$regex":filter
                }
            },
            {
                lastName:{
                    "$regex":filter
                }
            }
        ]
    })
    
    res.json({
        user: users.map(user=>({
            username:user.username,
            firstName:user.firstName,
            lastName:user.lastName,
            _id:user._id
        }))
    })


})

router.post("/signup",async (req,res)=>{
    const username=req.body.username;
    const password=req.body.password;
    const firstName=req.body.firstName;
    const lastName=req.body.lastName;

    const existingUser = await User.findOne({
        username: req.body.username
    })

    if (existingUser) {
        return res.status(411).json({
            message: "Email already taken/Incorrect inputs"
        })
    }
     
    
        let user=await User.create({
            username:username,
            password:password,
            firstName:firstName,
            lastName:lastName
        })

        const userId = user._id;
        
        await Account.create({
            userId,
            balance:Math.floor( 1 + Math.random() * 10000)
        })

        const token=jwt.sign({userId: user._id},JWT_SECRET)

        res.status(200).json({
            msg:"user created sucessfully!!!",
            id:token,
            name:username,
        })
 
     
       
    

})
router.post("/signin",async (req,res)=>{
    const username=req.body.username;
    const password=req.body.password;
   
        let val=await User.findOne({
            username:username,
            password:password,
        })
        if(val){
            const token=jwt.sign({userId: val._id},JWT_SECRET)

            res.status(200).json({
                msg:"signed in sucessfully!!!",
                id:token,
                name:val.username,
                
            })
        }
        else{
            return res.status(403).json({
                msg: "Error while login",
              });
        }
       
   
       
    
       
    

})

router.put("/",authMiddleware,async (req,res)=>{

  const check= updateBody.safeParse(req.body);

  if(!check.success){
    res.status(411).json({
        message:"Error while updating"
    })
  }
  await User.updateOne(
    {username:req.username},req.body
 )
 res.json({
    message:"updated"
 })


})








module.exports=router