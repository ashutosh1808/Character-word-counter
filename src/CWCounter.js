import {useState,useEffect} from "react"
 
function CWCounter()
{
const[txt,setTxt]=useState("")
const[ans,setAns]=useState("")

const count=()=>{
	let cc=txt.length
	let wc=txt.split(" ").length
	if(cc===0)			//no words no chars
		wc=0
	let msg="cc= "+cc+" wc="+wc
	setAns(msg)
}
useEffect(()=>{count()},[txt])		//to instant display
const hTxt=(event)=>{setTxt(event.target.value)}
return(
<>
<center>
<h1> Character word counter </h1>
<form>
<textarea rows={7} cols={50} placeholder="enter something" onChange={hTxt}></textarea>
</form>
<h1>{ans}</h1>
</center>
</>
)
}
export default CWCounter;