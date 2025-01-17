import SingelLetter from "./singelLetter"
const Show=({letters})=>{
    return(
    <>
   {letters.map (letter=><SingelLetter lLetter={letter}/>)}
   </>
)
}
export default Show