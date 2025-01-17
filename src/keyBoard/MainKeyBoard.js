import { useState } from "react"
import SmallLetters from "./SmallLeters"
import Show from "./show"
import BigLetters from "./bigLetters"
import Hebrew from "./Hebrew"
import Symbols from "./symbols"
import Numbers from "./numbers"
import "../get100/styles.css"
const MainKeyBoard=()=>{
    const[typeKeyBoard,setTypeKeyBoard]=useState("smallLetters")
    const [letters,setLettrs]=useState([])
    const [color,setColor]=useState('black')
    const [font,setFont]=useState('arial')
    const [size,setSize]=useState("30")
    const [back,setBack]=useState('white')
    const [underline,setUnderline]=useState("none")
    const [fontWeight,setFontWeight]=useState("none")
    const addLetter=(letter)=>{
    const obj={
        color:color,
        font:font,
        size: size,
        letter: letter,
        backColor: back,
        underline: underline,
        fontWeight:fontWeight
    }
    setLettrs([...letters,obj])
    console.log(letters)
    }
    const upper = () => {
        const upperLetters = letters.map((letteri) => {
            letteri.letter = letteri.letter.toUpperCase()
            return letteri
        })
        setLettrs(upperLetters)
    }
    const lowerLetters = () => {
        const lowerLetters = letters.map((letteri) => {
            letteri.letter = letteri.letter.toLowerCase()
            return letteri
        })
        setLettrs(lowerLetters)
    }
    const remove=()=>{
    const newArr=[...letters]
      newArr.pop()

     setLettrs(newArr)

    }
    return(
        <>
        <div style={{width:"100%",overflow:"hidden",height:"calc(90vh - 350px)"}}>
            <br/>
        <Show letters={letters} style={{marginBottom:"300px"}}/>
        </div>
        <div style={{width:"100vw",display:"flex",justifyContent:"center"}}>
     <div style={{boxShadow: "0 4px 20px rgba(0, 0, 0, 0.5)",padding:"10px",backgroundColor:" rgba(50, 50, 50, 0.5)",height:"300px",bottom:"7vh",position:"fixed",width:"80%" ,display:"grid",gap:"20px",borderRadius:"10px"
     , gridTemplateColumns:"repeat(11,1fr)",gridTemplateRows:"repeat(5,1fr)",boxSizing: "border-box"}}>
     
     
     
     
     <label style={{textAlign:"right" ,fontSize:"20px"}}>color</label>
     <input  type="color" onChange={(e)=>{setColor(e.target.value)}}style={{ width:"100%" }}></input>
     <label style={{textAlign:"right", fontSize:"20px"}}>back</label>
     <input type='color' onChange={(e)=>{setBack(e.target.value)}}style={{ width:"100%"}}></input>
     <select onChange={(e)=>{setFont(e.target.value)}} style={{gridColumn:"span 2", height:"70%", width:"80%",marginLeft:"20px"}}>
        <option >ariel</option>
        <option >impact</option>
        <option >Calibri</option>
        <option >Gill Sans MT</option>
     </select>
     <select onChange={(e)=>{setSize(e.target.value)}}style={{height:"70%"}}>
        <option value={"30"}>30</option>
        <option value={"40"}>40</option>
        <option value={"70"}>70</option>
        <option value={"130"}>130</option>
        <option value={"200"} >200</option>
     </select>
    <button style={{ textDecoration: "underline" , height:"80%", width:"50%", marginLeft:"20px"}} onClick={()=>{underline==="none"?setUnderline("underline"):setUnderline("none")}} >u</button>
    <button style={{fontWeight:"bold",height:"80%" ,width:"50%", marginLeft:"20px" }} onClick={()=>{fontWeight==="none"?setFontWeight("bold"):setFontWeight("none")}}>B</button>
    <button onClick={()=>{upper()}} style={{height:"80%" ,width:"50%", marginLeft:"20px" }}>A+</button>
    <button onClick={()=>{lowerLetters()}} style={{height:"80%" ,width:"50%", marginLeft:"20px" }} >A-</button>
    
    {typeKeyBoard==="smallLetters"&&<SmallLetters addLetter={addLetter}/>}
     {typeKeyBoard==="bigLetters"&&<BigLetters  addLetter={addLetter}/>}
     {typeKeyBoard==="hebrew"&&<Hebrew  addLetter={addLetter}/>}
     {typeKeyBoard==="symbols"&&<Symbols  addLetter={addLetter}/>}
     {typeKeyBoard==="numbers"&&<Numbers  addLetter={addLetter}/>}
     <button className="bottonKey" onClick={()=>{remove()}}style={{gridRow:"2",gridColumn:"11",fontSize:"25px", borderRadius:"10px", boxShadow:"0px 0px 7px black" ,border:"none"}}>delete</button>
    <button className="bottonKey" onClick={()=>{setLettrs([])}}style={{gridRow:"5",gridColumn:"10/12",fontSize:"25px", borderRadius:"10px", boxShadow:"0px 0px 7px black" ,border:"none" }}>clear</button>
    <button className="bottonKey" onClick={()=>{addLetter(<br/>)}}style={{gridRow:"3",gridColumn:"11",fontSize:"25px", borderRadius:"10px", boxShadow:"0px 0px 7px black" ,border:"none"}}>enter</button>
    <button className="bottonKey" onClick={()=>{addLetter(" ")}}style={{gridRow:"5",gridColumn:"5/8",fontSize:"25px", borderRadius:"10px", boxShadow:"0px 0px 7px black" ,border:"none"}}>space</button>
    
    <button className="bottonKey" onClick={()=>{typeKeyBoard!=="bigLetters"?setTypeKeyBoard("bigLetters"):setTypeKeyBoard("smallLetters")}}style={{gridRow:"5",gridColumn:"1/3",backgroundColor:typeKeyBoard==="bigLetters"&&"#2879e2",fontSize:"25px", borderRadius:"10px", boxShadow:"0px 0px 7px black" ,border:"none"}}>cap</button>
    <button className="bottonKey" onClick={()=>{typeKeyBoard!=="hebrew"?setTypeKeyBoard("hebrew"):setTypeKeyBoard("smallLetters")}}style={{gridRow:"5",gridColumn:"3/5",backgroundColor:typeKeyBoard==="hebrew"&&"#2879e2",fontSize:"25px", borderRadius:"10px", boxShadow:"0px 0px 7px black" ,border:"none"}}>Hebrew</button>
    <button className="bottonKey" onClick={()=>{typeKeyBoard!=="symbols"?setTypeKeyBoard("symbols"):setTypeKeyBoard("smallLetters")}}style={{gridRow:"5",gridColumn:"8/10",backgroundColor:typeKeyBoard==="symbols"&&"#2879e2",fontSize:"25px", borderRadius:"10px", boxShadow:"0px 0px 7px black" ,border:"none"}}>symbols</button>
    <button className="bottonKey" onClick={()=>{typeKeyBoard!=="numbers"?setTypeKeyBoard("numbers"):setTypeKeyBoard("smallLetters")}}style={{gridRow:"4",gridColumn:"1",backgroundColor:typeKeyBoard==="numbers"&&"#2879e2",fontSize:"25px", borderRadius:"10px", boxShadow:"0px 0px 7px black" ,border:"none"}}>shift</button>
    <button className="bottonKey" onClick={()=>{typeKeyBoard!=="numbers"?setTypeKeyBoard("numbers"):setTypeKeyBoard("smallLetters")}}style={{gridRow:"4",gridColumn:"11",backgroundColor:typeKeyBoard==="numbers"&&"#2879e2",fontSize:"25px", borderRadius:"10px", boxShadow:"0px 0px 7px black" ,border:"none"}}>shift</button>
     </div>
     </div>
     </>
    )
    

}
export default MainKeyBoard