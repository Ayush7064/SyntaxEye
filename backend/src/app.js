const express=require("express");
const app =express();
const aiRouter=require("./routes/ai.routes");
const cors = require("cors");
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/",aiRouter);

app.get("/",(req,res)=>{
    res.send("Hello from home route");
});

module.exports=app;