require("dotenv").config();

const mongoose=require("mongoose");

function connectDB(){
    mongoose.connect(process.env.MONGO_CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true });
    const connection=mongoose.connection;

    connection.once("open",()=>{
        console.log("Database connected");
    })
    connection.on("error", (error) => {
        console.log("Database Error", error);
      });
    
}


module.exports=connectDB;