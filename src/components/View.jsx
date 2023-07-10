import React ,{useState}from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Axios from 'axios'
import {Link} from'react-router-dom'
function View(){
    const[empList,setEmplist]=useState([])
    const viewEmptable=()=>{
        Axios.get("http://localhost:3000/view").then((response)=>{setEmplist(response.data)
    })
    }
    const delEmp=(id)=>{
        Axios.delete("http://localhost:3000/deleteEmp/"+id).then(res=>{
            window.location.reload()
        }) 
    }
    return(
    <div>
    <button class="btn btn-primary" onClick={viewEmptable}>view data</button>
    <table class="table table-bordered">
        <thead>
            <tr>
                <th>id</th>
                <th>name</th>
                <th>email</th>
                <th>password</th>
                <th>gender</th>
                <th>age</th>
                <th>action</th>
                <th>action</th>
            </tr>
        </thead>
        {
            empList.map((val,key)=>{
                return(
                    <tbody>
                        <tr>
                            <td>{val.id}</td>
                            <td>{val.name}</td>
                            <td>{val.email}</td>
                            <td>{val.password}</td>
                            <td>{val.gender}</td>
                            <td>{val.age}</td>
                          
                            <td><Link to={`/update/${val.id}`} class="btn btn-primary">update</Link></td>
                            <td><Link to={`/update1/${val.id}`} class="btn btn-primary">update1</Link></td>
                              <td><button onClick={()=>delEmp(val.id)} class="btn btn-danger">delete</button></td>
                            <td><Link to={`/read/${val.id}`} class="btn btn-dark">fetch</Link></td>
                        </tr>
                    </tbody>

                )
            })
        }
    </table>
    </div>
)}
export default View