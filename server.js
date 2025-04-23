const express = require("express");
const connectDB = require("./database");
const User = require("./Models/User");
const sendMail= require('./config/nodemailerConfig')
require("dotenv").config();

const app = express();

connectDB();

app.use(express.json());
//ye line hame database me json formate to data parse(bhejne) krne me help kregi
// database me phle user  
app.post("/register-user", async (req, res) => {
  try {
    const { name, email, password, contact } = req.body;
    const otp= Math.floor(1000000+Math.random()*900000).toString();
    // for saving this data
    const newUser = new User({ name, email, password, contact,otp });
    await newUser.save();
    const subject = "Welcome to our Platform 👍🙌 Your otp for verification";
    const text = `Hii 👋 ${name}, \n Thank YOu for registering at our platform. Your otp is ${otp}, please don't share it to anybody else`;
    const html= `
    <h2>Welcome ${name}<h2/>
    <p styles={{color:'blue'}}>Your opt is : ${otp}<p/>
    <p styles={{color:'red'}}>please your these otp for verification your account<p/>
    `;
    sendMail(email,subject,text,html);
    console.log("data inserted successfully");
    return res.status(200).json({ message: "success" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
});
console.log();
app.listen(process.env.PORT, () => {
  console.log(`"server is running on port : ${process.env.PORT}"`);
});
