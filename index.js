const express =require("express");
const app = express();

const port = process.env.PORT || 3000;

app.get("/",(req,resp)=>{
        resp.end("HI, welcome to my heroku app");

        })


app.listen(port,(err)=>{
    if(err){
        console.log(err);
        return false;
        
    }
    console.log("port is running")
})
