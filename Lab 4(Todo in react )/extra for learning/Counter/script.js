import React, {useState} from "react";
import ReactDOM from "react-dom/client";
// Count incrementer and decrementer project
// For learning useState 
function Counter (){ //we first create a react component called counter
    // let count = 0 ;
    let [count, setCount] = useState(0); // count will keep track of number and setCount will update it accordingly.
    function incrementNumber(){
        count=count+1;
        setCount(count);
        console.log("Count value is : ",count);
        // document.querySelector('h1').innerHTML = `Count is : ${count}`;
    }
    function decrementNumber(){
        count=count-1;
        setCount(count);
        console.log("Count value is : ",count);
        // document.querySelector('h1').innerHTML = `Count is : ${count}`;
    }
    return (
        <div className="first">
        <h1>Count is: {count}</h1>
        <button onClick={incrementNumber}>Increment {count}</button>
        <button onClick={decrementNumber}>Decrement {count}</button>
        </div>  
    )
}



ReactDOM.createRoot(document.getElementById('root')).render(<Counter/>)
