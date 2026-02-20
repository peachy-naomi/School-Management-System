import React from "react";
import { useState } from "react";

function Button(){
    const [count, setCount] = useState(0)
    const [sum, setSum] = useState(1)
    const [multiply, setMultiply] = useState(1)
    const [fruits, setFruits] = useState(["Apple", "Orange"])
    const addFruit = ()=>{
        setFruits([fruits, "Cherry", "Mango"])
    }

    return(
        <div>
            <h1>COUNT:{count}</h1>
            <button onClick={()=> setCount(count + 1)}>INCREASE</button>
            <button onClick={()=> setCount(count - 1)}>DECREASE</button>
            <h1>SUM:{sum}</h1>
            <button onClick={()=> setSum(sum + sum)}>SUM</button>
            <h1>MULTIPLY:{multiply}</h1>
            <button onClick={()=> setMultiply(multiply * 2)}>MULTIPLY</button>

            <div>
                <ul>
                    {fruits.map((fruit, index) => (
                        <li key={index}>{fruit}</li>
                    ))}
                </ul>
                <button onClick={addFruit}>Add Fruit</button>
            </div>

            
        </div>
        
    )
}

export default Button