import './styles.css';

const Card=({user,updateUser,remove})=>{
    const add1=()=>{
       const nweUser={...user,num:user.num+1,steps:user.steps+1,disable:true}
        updateUser(nweUser)
    }
    const minus1=()=>{
        const nweUser={...user,num:user.num-1,steps:user.steps+1,disable:true}
         updateUser(nweUser)
     }
     const multipication2=()=>{
        const nweUser={...user,num:user.num*2,steps:user.steps+1,disable:true}
         updateUser(nweUser)
     }
     const divide2=()=>{
        const nweUser={...user,num:user.num/2,steps:user.steps+1,disable:true}
         updateUser(nweUser)
     }
  return(
    <div style={{backgroundColor:user.disable?"#ccc":"white", height:"40vh",width:"20vw", borderRadius:"10px", border:"solid #042669", display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column"}} >
      <br/><br/><br/>
     <div style={{fontFamily:"Gill Sans MT", fontSize:"xxx-large"}}>{user.name}</div>
    <h1 style={{fontSize:"xxx-large"}}>{user.num}</h1>
   
    <div style={{display:"flex", alignItems:"center", gap:"10px"}} >
    <button  disabled={user.disable} onClick={()=>{add1()}} style={{height:"4vh", width:"4vh",backgroundColor:user.disable?"":" #042669",fontSize:"15px", borderRadius:"4px", boxShadow:"0px 0px 7px black" ,border:"none",color:"white"}}>+1</button>
    <button  disabled={user.disable} onClick={()=>{minus1()}}style={{height:"4vh", width:"4vh",backgroundColor:user.disable?"":" #042669",fontSize:"15px", borderRadius:"4px", boxShadow:"0px 0px 7px black" ,border:"none",color:"white"}}>-1</button>
    <button  disabled={user.disable} onClick={()=>{multipication2()}}style={{height:"4vh", width:"4vh",backgroundColor:user.disable?"":" #042669",fontSize:"15px", borderRadius:"4px", boxShadow:"0px 0px 7px black" ,border:"none",color:"white"}}>*2</button>
    <button  disabled={user.disable} onClick={()=>{divide2()}}style={{height:"4vh", width:"4vh",backgroundColor:user.disable?"":" #042669",fontSize:"15px", borderRadius:"4px", boxShadow:"0px 0px 7px black" ,border:"none",color:"white"}}>/2</button>
    </div>
    <br/> <br/> 
    <div style={{display:"flex",gap:"50%",width:"100%",padding:"20px",justifyContent:"space-around"}}>
    <h4>steps:{user.steps}</h4>
    <button onClick={()=>{remove(user)}}style={{height:"4vh", width:"10vh",backgroundColor:user.disable?"":" #042669",fontSize:"15px", borderRadius:"4px", boxShadow:"0px 0px 7px black" ,border:"none",color:"white"}}>leave</button>
    </div>
    </div>
  )
}
export default Card