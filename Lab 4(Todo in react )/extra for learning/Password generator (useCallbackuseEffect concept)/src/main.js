import React,{useEffect, useState, useCallback} from "react";
import ReactDOM from "react-dom/client";
// Did this project to learn useCallback and useEffect 
function PasswordGenerator(){
    const [Password,setPassword]=useState("");
    const [Length,setLength]=useState(10);
    const [numberChanged, setnumberChanged] = useState(false);
    const [characterChanged, setcharacterChanged] = useState(false);
    const generatePassword = useCallback(()=>{
         let str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if(numberChanged)
            str+="0123456789";
        if(characterChanged)
            str+="!@#$%^&*()_+=/?:;{}[]";
        let pass= ""
        for(let i=0;i<Length;i++){
            pass += str[Math.floor(Math.random()*str.length)]
        }
        setPassword(pass);
    },[Length,numberChanged,characterChanged])
    // function generatePassword(){
       
    // };
    // generatePassword();

    useEffect(()=>{generatePassword()},[generatePassword])
    return(
        <>
        <h1>Password is : {Password}</h1>
        <div className="second">
            <input type="range" min={5} max={50} value={Length} onChange={(e)=>setLength(e.target.value)}></input>
            <label>Length ({Length})</label>
            <input type="checkbox" defaultChecked = {numberChanged} onChange={()=>setnumberChanged(!numberChanged)}></input>
            <label>Number</label>
            <input type="checkbox" defaultChecked = {characterChanged} onChange={()=>setcharacterChanged(!characterChanged)}></input>
            <label>Character</label>
        </div>
        </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<PasswordGenerator/>)