
import { useState } from "react"
const SmallLetters=({addLetter})=>{
    return(<>
     <button className="bottonKey"onClick={()=>{addLetter("q")}}style={{fontSize:"25px", borderRadius:"10px", boxShadow:"0px 0px 7px black" ,border:"none"}}>q</button>
     <button className="bottonKey"onClick={()=>{addLetter("w")}}style={{fontSize:"25px", borderRadius:"10px", boxShadow:"0px 0px 7px black" ,border:"none"}}>w</button>
     <button className="bottonKey"onClick={()=>{addLetter("e")}}style={{fontSize:"25px", borderRadius:"10px", boxShadow:"0px 0px 7px black" ,border:"none"}}>e</button>
     <button className="bottonKey"onClick={()=>{addLetter("r")}}style={{fontSize:"25px", borderRadius:"10px", boxShadow:"0px 0px 7px black" ,border:"none"}}>r</button>
     <button className="bottonKey"onClick={()=>{addLetter("t")}}style={{fontSize:"25px", borderRadius:"10px", boxShadow:"0px 0px 7px black" ,border:"none"}}>t</button>
     <button className="bottonKey"onClick={()=>{addLetter("y")}}style={{fontSize:"25px", borderRadius:"10px", boxShadow:"0px 0px 7px black" ,border:"none"}}>y</button>
     <button className="bottonKey"onClick={()=>{addLetter("u")}}style={{fontSize:"25px", borderRadius:"10px", boxShadow:"0px 0px 7px black" ,border:"none"}}>u</button>
     <button className="bottonKey"onClick={()=>{addLetter("i")}}style={{fontSize:"25px", borderRadius:"10px", boxShadow:"0px 0px 7px black" ,border:"none"}}>i</button>
     <button className="bottonKey"onClick={()=>{addLetter("o")}}style={{fontSize:"25px", borderRadius:"10px", boxShadow:"0px 0px 7px black" ,border:"none"}}>o</button>
     <button className="bottonKey"onClick={()=>{addLetter("p")}}style={{fontSize:"25px", borderRadius:"10px", boxShadow:"0px 0px 7px black" ,border:"none"}}>p</button>
     <button className="bottonKey"onClick={()=>{addLetter("a")}}style={{fontSize:"25px", borderRadius:"10px", boxShadow:"0px 0px 7px black" ,border:"none"}}>a</button>
     <button className="bottonKey"onClick={()=>{addLetter("s")}}style={{fontSize:"25px", borderRadius:"10px", boxShadow:"0px 0px 7px black" ,border:"none"}}>s</button>
     <button className="bottonKey"onClick={()=>{addLetter("d")}}style={{fontSize:"25px", borderRadius:"10px", boxShadow:"0px 0px 7px black" ,border:"none"}}>d</button>
     <button className="bottonKey"onClick={()=>{addLetter("f")}}style={{fontSize:"25px", borderRadius:"10px", boxShadow:"0px 0px 7px black" ,border:"none"}}>f</button>
     <button className="bottonKey"onClick={()=>{addLetter("g")}}style={{fontSize:"25px", borderRadius:"10px", boxShadow:"0px 0px 7px black" ,border:"none"}}>g</button>
     <button className="bottonKey"onClick={()=>{addLetter("h")}}style={{fontSize:"25px", borderRadius:"10px", boxShadow:"0px 0px 7px black" ,border:"none"}}>h</button>
     <button className="bottonKey"onClick={()=>{addLetter("j")}}style={{fontSize:"25px", borderRadius:"10px", boxShadow:"0px 0px 7px black" ,border:"none"}}>j</button>
     <button className="bottonKey"onClick={()=>{addLetter("k")}}style={{fontSize:"25px", borderRadius:"10px", boxShadow:"0px 0px 7px black" ,border:"none"}}>k</button>
     <button className="bottonKey"onClick={()=>{addLetter("l")}}style={{fontSize:"25px", borderRadius:"10px", boxShadow:"0px 0px 7px black" ,border:"none"}}>l</button>
     <button className="bottonKey"onClick={()=>{addLetter(".")}}style={{fontSize:"25px", borderRadius:"10px", boxShadow:"0px 0px 7px black" ,border:"none"}}>.</button>
     <button className="bottonKey"onClick={()=>{addLetter("z")}}style={{fontSize:"25px", borderRadius:"10px", boxShadow:"0px 0px 7px black" ,border:"none"}}>z</button>
     <button className="bottonKey"onClick={()=>{addLetter("x")}}style={{fontSize:"25px", borderRadius:"10px", boxShadow:"0px 0px 7px black" ,border:"none"}}>x</button>
     <button className="bottonKey"onClick={()=>{addLetter("c")}}style={{fontSize:"25px", borderRadius:"10px", boxShadow:"0px 0px 7px black" ,border:"none"}}>c</button>
     <button className="bottonKey"onClick={()=>{addLetter("v")}}style={{fontSize:"25px", borderRadius:"10px", boxShadow:"0px 0px 7px black" ,border:"none"}}>v</button>
     <button className="bottonKey"onClick={()=>{addLetter("b")}}style={{fontSize:"25px", borderRadius:"10px", boxShadow:"0px 0px 7px black" ,border:"none"}}>b</button>
     <button className="bottonKey"onClick={()=>{addLetter("n")}}style={{fontSize:"25px", borderRadius:"10px", boxShadow:"0px 0px 7px black" ,border:"none"}}>n</button>
     <button className="bottonKey"onClick={()=>{addLetter("m")}}style={{fontSize:"25px", borderRadius:"10px", boxShadow:"0px 0px 7px black" ,border:"none"}}>m</button>
     <button className="bottonKey"onClick={()=>{addLetter(",")}}style={{fontSize:"25px", borderRadius:"10px", boxShadow:"0px 0px 7px black" ,border:"none"}}>,</button>
     <button className="bottonKey"onClick={()=>{addLetter("/")}}style={{fontSize:"25px", borderRadius:"10px", boxShadow:"0px 0px 7px black" ,border:"none"}}>/</button>
    </>)
}
export default SmallLetters