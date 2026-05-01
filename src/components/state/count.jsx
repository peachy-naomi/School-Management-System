import { useState } from "react";

export default function Practice(){
    const [count, setCount] = useState(0)
    return(
        <div>
            <h1>Count: {count}</h1>
            <button onClick={()=> setCount(count + 1)}>Increase
            </button>
            <button onClick={()=> {
                if (count > 0){
                    setCount(count -1)
                }
            }} disabled={count === 0}>
            Decrease</button>
            <button onClick={()=> setCount(0)}>Reset</button>
            
        </div>
    )
}