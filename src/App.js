import { useState } from "react";
import MainKeyBoard from "./keyBoard/MainKeyBoard"
import MainGet100 from "./get100/MainGet100"
import "./get100/styles.css"
function App() {
  const [game,setGame]=useState(1)
  return (
    <div className="App">
      <button onClick={()=>{setGame(1)}} style={{boxShadow:"0px 0px 7px black",width:"50%",height:"50px",backgroundColor:game===1?"#2879e2":"#042669",border:"none",fontSize:"30px",color:"white"}}>wysiwyg</button>
      <button onClick={()=>{setGame(2)}} style={{boxShadow:"0px 0px 7px black",width:"50%",height:"50px",backgroundColor:game===2?"#2879e2":"#042669",border:"none",fontSize:"30px",color:"white"}}>get to 100</button>
      {game===1&&<MainKeyBoard/>}
      {game===2&&<MainGet100/>}
      
    </div>

  );
}

export default App;
