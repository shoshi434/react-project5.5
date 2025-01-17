import { useState } from "react"
import './styles.css';


const AddUser=({addUser,users})=>{
    const [name,setName]=useState("")
    const addNewUser=()=>{
        addUser(name)
        setName("")
    }
    return(<div style={{marginLeft:"5vw"}}>
    <br/>
        <br/>
        <h2 style={{fontFamily:"Gill Sans MT"}}>num users {users.length}</h2>
        <br/>
        
    <input style={{width:"25%",height:"5vh",borderRadius:"6px",border:"solid #042669"}}placeholder="enter user name" value={name} type="text" onChange={(e)=>{setName(e.target.value)}}></input>
    <br/> <br/>
    <button style={{width:"10%",height:"5vh", backgroundColor:name===""?"rgb(88, 103, 133)":"#042669",border:"solid black",borderRadius:"10px",color:"white", boxShadow:"0 0 7px black"}} disabled={name===""} onClick={()=>{addNewUser()}}>add user</button>
    {users.map((user)=>{
        return  <div style={{fontFamily:"Gill Sans MT",fontSize:"20px"}}><br/> {user.name} {user.num}</div>
    })}

    </div>)
   
}
export default AddUser