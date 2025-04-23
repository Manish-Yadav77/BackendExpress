const express= require("express");
const connectDB = require("./database");
const User = require("./Models/User");
require("dotenv").config();
const app =express();
connectDB();
app.use(express.json())
// ye line hme database me json formate to data parse bhejne m help kregi 
//database me phla user insert kro 
app.post("/api/users",async(req,res)=>{try{
    const{name,email,password,contact}=req.body;
const newuser= new user({name,email,password,contact})
await newuser.save();
console.log("Data inserted Succesfully")
return res.status(200).json({message:"SuccessFully Inserted"})
}catch(error){
    console.log(error)
    return res.status(500).json({message:"internal server error"})

}
})
// database se data extract krne k liye ham get method ka use krenge .
app.get("/allusers",async(req,res)=>{
    try{
        //jab database se sare users ko find krna ho to kon sa method use krenge 
        // find()=> to find all users 
        const users=await User.find();
        res.json(users)
 
    }
    catch(error){
        console.log(error);
        return res.status(500).json({message:"internal server error"})
    }
})

// app.put('/users/:id',async (req,res)=>{
//     try {
//         // find by id and update -> sabse phle id ke basis pr find krnea uske bad update krna
//     const{name,email,password,contact}=req.body;
//     // jab postman ki req se koi datya uthayenge to ham req.params.data(id) ye use krenge
//     const updateUser = await User.findByIdAndUpdate(req.params.id,{name,email,password,contact},{new:true});
//     if(!updateUser)
//     {
//         return res.status(404).json({message:'user not found'})
//     }
//     res.json(updateUser)
        
//     } catch (error) {
//         return res.status(200).json({message:'an error is occured'})
//     }
// })

// app.patch('/update/:id',async (req,res)=>{
//     try {
//         const name = req.body
//         const data =  Object.assign(req.params.id,{...name})
//         if(!data)
//         {
//             return res.status(404).json({message:'error again...'})
//         }
//         res.json({...name})
        
//     } catch (error) {
//         return res.status(500).json({message:'user not found error'})
//     }
// })

// app.delete('/users/:id',async (req,res)=>{
//     try {
//         const deletedUser = await User.findByIdAndDelete(req.params.id);
//         if(!deletedUser)
//         {
//             return res.status(400).json({message:'not delet error'})
//         }
//         res.json(deletedUser);
        
//     } catch (error) {
//         return res.status(500).json({message:'not found error'})
//     }
// })
app.listen(process.env.PORT,()=>{
    console.log("server is running on localhost:5000 thank you so much ")
})