import React from "react";
import { useState } from "react";

function State(){
    const [name, setShowName] = useState("")
    const [email, setShowEmail] = useState("")

    return(
        <div>
            <input type="text" placeholder="Name" value={name} onChange={(e)=> setShowName(e.target.value)} />
            <input type="email" placeholder="Email" value={email} onChange={(e) => setShowEmail(e.target.value)}/>
            <button onClick={()=> {setShowName("");setShowEmail("")}} disabled={name === "" && email === ""}>Reset</button>
            <h1>Hello {name}</h1>
            <h1>Your email is: {email}</h1>
        </div>
    )
}




export default State