import { useState } from "react"
import AddUser from "./AddUser"
import MainGame from "./MainGame"
import './styles.css';
import { useEffect } from "react";


const MainGet100=()=>{
    const[status,setStatus]=useState(0)
    const[users,setUsers]=useState([])
    const[able,setAble] =useState(false)
    const[wins,setWins]=useState([])
    const addUser=(name)=>{
       const obj={
            id:users.length+1,
            name:name,
            num:Math.floor(Math.random()*100),
            disable:true,
            steps:0,
            win:false
        }
        setUsers([...users,obj])
        
    }
      const startGame=()=>{
        setStatus(1)
        setAble(true)
       const newUsers= users.map((user)=>{
        if(user.id===1){
         return   user={...user,disable:false}
        }
        else{
            return user
        }
       })
       setUsers(newUsers)
      }
      const updateUser = (updatedUser) => {
        // בדיקה אם המשתמש ניצח
        if (updatedUser.num === 100) {
          updatedUser.win = true
         const newWin=[...wins,updatedUser]
         setWins(newWin)
        }
  
        // עדכון המשתמשים
        const updatedUsers = users.map((user) =>
          user.id === updatedUser.id ? updatedUser : user
        )
      
        // מציאת השחקן הבא שעדיין לא ניצח
        let nextUser = updatedUsers.find(
          (user) => user.id > updatedUser.id && user.win!==true
        )
      
        if (!nextUser) {
          // אם לא נמצא שחקן הבא, חפשי מההתחלה
          nextUser = updatedUsers.find((user) => !user.win);
        }
      
        // עדכון ה-disable של השחקנים
        const finalUsers = updatedUsers.map((user) =>
          nextUser!=null&&user.id === nextUser.id ? { ...user, disable: false } : { ...user, disable: true }
        )
      
        setUsers(finalUsers);
      }

    
      
      const remove = (user) => {
        // סינון המשתמש שנמחק
        const filteredUsers = users.filter((u) => u.id !== user.id)
      
        // עדכון מזהים למשתמשים הנותרים
        const updatedUsers = filteredUsers.map((u) => ({...u,id: u.id + 1,}))
        // עדכון ה-state
        setUsers(updatedUsers)
          // מציאת המשתמש הבא (אם יש)
  let nextUser = updatedUsers.find((u) => u.id > user.id && !u.win)

  // אם אין משתמש אחרי, מצא את הראשון שעדיין לא ניצח
  if (!nextUser) {
    nextUser = updatedUsers.find((u) => !u.win)
  }

  // עדכון מצב disable
  const finalUsers = updatedUsers.map((u) => ({
    ...u,
    disable: nextUser && u.id === nextUser.id ? false : true,
  }))

  // עדכון ה-state
  setUsers(finalUsers)
    
    }
    
      
    return (
        <>
        <div style={{backgroundColor:"#042669",color:"white",display:"grid",gridTemplateColumns:"repeat(10,1fr)",padding:"1%",gap:"1%"}}>
        <h1 style={{gridColumn:"span 7", fontFamily:"Calibri",marginLeft:"8vh"}}>get to 100!!!</h1>
        <button  disabled={able} onClick={()=>{setStatus(0)}}style={{border:"solid",borderColor:"white",    backgroundColor: able ? "" : "#042669",borderRadius:"10px",color:"white", boxShadow:"0px 0px 7px white"}}>add user</button>
        <button  disabled={able||users.length===0} onClick={()=>{startGame()}}style={{border:"solid",borderColor:"white",    backgroundColor: able || users.length === 0 ? "" : "#042669",borderRadius:"10px",color:"white", boxShadow:"0 0 7px white"}}>start game</button>
        <button  onClick={()=>{setStatus(0) ;setUsers([]);setAble(false)}}style={{border:"solid",borderColor:"white",    backgroundColor:  "#042669",borderRadius:"10px",color:"white", boxShadow:"0 0 7px white"}}>new game</button>
        </div>
        <div>
        
        {status===0&&<AddUser  addUser={addUser} users={users}/>}
        {status===1&&<MainGame users={users} updateUser={updateUser} remove={remove} wins={wins}/>}
        </div>
</>)
}
export default MainGet100