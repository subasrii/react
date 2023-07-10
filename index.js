const express=require('express')
const mysql=require('mysql')
const cors=require('cors')
const app=express()

app.listen(3000)
app.use(express.json())
app.use(cors())

const con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'mern'
})

app.post('/saveemp',function(req,res){
const name=req.body.name
const email=req.body.email
const password=req.body.password
const gender=req.body.gender
const age=req.body.age
con.query("insert into emp(name,email,password,gender,age) Values(?,?,?,?,?)",[name,email,password,gender,age],(err,result)=>{
  if(err){
    throw err
  }  
  else{
    res.send("insert successfully")
  }
})
})
app.get('/view',function(req,res){
  con.query("SELECT * FROM emp",(err,result)=>{
    if(err){
      throw err
    }else{
      res.send(result)
    }
  })
})
app.delete('/deleteEmp/:id',function(req,res){
  const id=req.params.id
  con.query("DELETE FROM emp WHERE id=?",[id],(err,result)=>{
    if(err){
      throw err
    }
    else{
      res.send("deleted successfuly")
    }
  })
})
app.get('/read/:id',function(req,res){
  const query="SELECT *FROM emp where id=?"
  const id=req.params.id
  con.query(query,[id],(err,result)=>{
    if(err){
      throw err
    }else{
      res.send(result)
    }
  })
})
app.put('/update/:id',function(req,res){
  const id=req.params.id
  const name=req.body.nname
  const email=req.body.nemail
  const password=req.body.npassword
  const gender=req.body.ngender
  const age=req.body.nage
  con.query("UPDATE emp set name=?,email=?,password=?,gender=?,age=? WHERE id=?",[name,email,password,gender,age,id],(err,result)=>{
    if(err){
      throw err
    }  
    else{
      res.send("update successfully")
    }
  })
  })
  app.put('/update1/:id',function(req,res){
    const id =req.params.id
    const name=req.body.nname
    const email=req.body.nemail
    const password=req.body.npassword
    const gender=req.body.ngender
    const age=req.body.nage
    con.query("UPDATE emp set name=?,email=?,password=?,gender=?,age=? WHERE id=?",[name,email,password,gender,age,id],(err,result)=>{
      if(err){
        throw err
      }  
      else{
        res.send("update successfully")
      }
    })
    })