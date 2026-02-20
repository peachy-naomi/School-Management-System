import React from "react";
import { useState } from "react";


function ToggleMessage(){
    const [isvisible, setIsVisible] = useState(false)

    return(
        <div>
            <button onClick={() => setIsVisible(!isvisible)}>
            Toggle Message
            </button>

            {isvisible && <p>Hello! This message is now visible</p>}
        </div>
    )
}

// function Form(props){
//     return(
//         <div className="form"> 
//             <div className="formchild">
//                 <input type={props.type} placeholder={props. message}  value={props.value}/>
//             </div>
//         </div>
//     )
// }

export default ToggleMessage