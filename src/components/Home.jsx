import React ,{useState}from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Axios from 'axios'
import {Link} from 'react-router-dom'
function Home(){
    const[name,setname]=useState("")
    const[email,setemail]=useState("")
    const[password,setpassword]=useState("")
    const[gender,setgender]=useState("")
    const[age,setage]=useState(0)
    const addEmp=()=>{
        Axios.post("http://localhost:3000/saveemp",{
            name:name,
            email:email,
            password:password,
            gender:gender,
            age:age
        }).then(()=>{
            console.log("inserted sucessfully")
        })
    }
    return(
        <body>
            <h1 class="my-5">add employee</h1>
            <div class="container">
            <div class="d-flex justify-content-center">
            <div class="row">
   <form onSubmit={addEmp}>
  <div class="form-group">
    <label for="name">Enter name</label>
    <input type="name" class="form-control"   placeholder="Enter name" onChange={(e)=>{setname(e.target.value)}}/>
    
  </div>
  <div class="form-group">
    <label for="email">Enter email</label>
    <input type="email" class="form-control"   placeholder="name@gmail.com" onChange={(e)=>{setemail(e.target.value)}}/>
    
  </div>
  <div class="form-group">
    <label for="Password">Password</label>
    <input type="password" class="form-control"  placeholder="enter Password" onChange={(e)=>{setpassword(e.target.value)}}/>
  </div>
  <div class="form-group form-check" onChange={(e)=>{setgender(e.target.value)}}>
  <label for="gender">gender</label>
    <input type="checkbox" class="form-check" value="male" name="gen" />male
    <input type="checkbox" class="form-check" value="female" name="gen" />female
   </div>
  
  <div class="form-group">
    <label for="age">Enter age</label>
    <input type="text" class="form-control" onChange={(e)=>{setage(e.target.value)}} />
    </div>
    <div>
  <input type="submit" class="btn btn-primary my-3"/>
  </div>
</form>
<div>
  <Link to="/view" class="btn btn-info">view table</Link>
</div>
</div>
</div>
</div>
  
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
  </body>
        
    )
}
export default Home