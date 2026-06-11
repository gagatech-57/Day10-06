import React,{useState} from "react";
import child from "./Chlid"
function Memo(){
    const[count,setcount]=useState(0);
    const[text,setText]=useState("")
    return(

        <div>
        <h1>React Memo Exmple</h1>
        <button onClick={()=>setcount(count+1)}>
            + count
        </button>
        <input type="text" onChange={(e)=>setText(e.target.value)}/>
        <h3>Your Typed:{text}</h3>
        <chlid count={count}/>



        </div>
    )
}
export default Memo;