import express from "express";
import dotenv from "dotenv" ;

dotenv.config() ;

const app = express();
const PORT = process.env.PORT || 8080 ;

app.get('/',(req,resp)=>{
    resp.send("erver is running")
});

app.listen(process.env.PORT,()=>{
    console.log(`server is running on port http://localhost:${PORT}`)
})