const express=require("express");
const app=express();
const ejs=require("ejs");

const port=process.env.port || 3000;

// database modle import
const connectDB=require("./config/db");
connectDB();

// template engine
app.set("view engine","ejs");

// static assets
app.use(express.static("public"));
// enable json.parse
app.use(express.json());


// init Routes

app.use("/api/files",require("./routes/files"));
app.use("/files",require("./routes/show"));
app.use("/file/download",require("./routes/download"));


app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
})