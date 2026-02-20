import React from "react";
import { useState } from "react";

function Reg(){
    const [showLog, setShowLog] = useState(false)
    const [showReg, setShowReg] = useState(false)

    return(
        <section className="section">
            <button className="btn" onClick={() => setShowLog(true)}>
            {showLog ? "Hide Login" : "Show Login"}    
                LOGIN</button>
            <div className="forms">
                {/* Conditional rendering */}
            {showLog && (
                <div className="log">
                <h1>Login</h1>
                <input type="email" placeholder="Email"/><br />
                <input type="password" placeholder="Password"/><br />
                <button>LOGIN</button>
                <p>Don't have an account</p><span>Register Here</span>
            </div>
            )}    
            
        </div>
        </section>
        
    )
}

export default Reg