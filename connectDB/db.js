const mongoose=require('mongoose');
const dotenv=require('dotenv');
dotenv.config();

mongoose.set('strictQuery',true);

const connectDB=()=>{
    return mongoose.connect("mongodb+srv://root:mongo9597DB@cluster0.nsz5wgf.mongodb.net/?retryWrites=true&w=majority",{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
        console.log("Connected to DB");
    }).catch((err)=>console.log(err));
}

module.exports=connectDB;

//process.env.MONGO_URL