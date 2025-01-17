import './styles.css';

import Card from "./Card"

const MainGame=({users,updateUser,remove,wins})=>{
return <>
<br/><br/>
<div style={{display:"flex",gap:"10vh",justifyContent:"space-around"}}>
       <div style={{display:"flex", flexDirection:"column",alignItems:"center"}}>
       <h1>wins:</h1>
       {wins.map((win)=>{
        return <h2>{win.name} steps:{win.steps}</h2>
       })}
       </div>
        <div style={{display:"flex", gap:"10vh", flexDirection:"column"}}>
{users.map((user)=><Card user={user} updateUser={updateUser} remove={remove}/> )}
</div>
       </div>
        </>
    


}
export default MainGame