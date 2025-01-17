const SingelLetter=({lLetter})=>{
    return (
<span style={{color: lLetter.color, fontFamily: lLetter.font, background: lLetter.backColor ,fontSize: `${lLetter.size}px`, textDecoration: lLetter.underline,fontWeight: lLetter.fontWeight }}>{lLetter.letter}</span>
    )
}
export default SingelLetter