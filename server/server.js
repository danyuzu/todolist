const express = require('express')
const app= express()

//app.use(express.json())
 app.use(express.urlencoded({extended: true}))

app.get("/api", (req, res) =>{

    res.json({"users": ["userone","usertwo","userthree"]})
})


app.post('/postRequest', (req, res)=>{
   
    console.log(req.body)
  const actividad = new actividad(req.body);

  actividad.save();
  res.status(201).json("falla")
   
})

app.delete('/delete',(req, res)=>{
  const id =req.params.id;
  res.send("eliminado")

})

app.listen(5000, ()=> {console.log("server started in 50000")})