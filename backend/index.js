const express=require("express")
const cors = require('cors');
const app=express()

app.use(cors());
const data=[  {
        "Id":"1",
        "name":"Wireless Connection",
        "para":"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an"
      },
      {
        "Id":"2",
        "name":"Qualitative Sound",
        "para":"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an"
      
      
      },
      {
        "Id":"3",
        "name":"Beautiful and Modern Design",
        "para":"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an"
      
      
      },
      {
        "Id":"4",
        "name":"High-end sound",
        "para":"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an"
      
      
      },
      {
        "Id":"5",
        "name":"Bluetooth",
        "para":"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an"
      
      
      },{
        "Id":"6",
        "name":"Waterproof & Dust Tight",
        "para":"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an"
      
      
      }
    ]
app.get("/api",(req,res)=>{
    res.send(data)
})

app.listen(3005,()=>{
    console.log("conneted")
})