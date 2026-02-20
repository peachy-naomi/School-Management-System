import React from "react";
import { useState } from "react";
function Car(){
    const [login, setIsLoggedIn] = useState(false)
    return(
        <div>
            {login ? (
                <p>Welcome Back</p>
            ) : (
                <p>Please log in</p>
            )}
            <button onClick={()=> setIsLoggedIn(!false)}>{login ? "Logout":"Login"}</button>
        </div>

    )
}

export default Car