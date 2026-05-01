import { use } from "react";
import { useState } from "react";

export default function Practice3(){
    const [form, setForm] = useState(false)
    const [isvisible, setIsVisible] = useState("login")
    return(
        <div>
            {!form && (
            <button onClick={()=> setForm(true)} disabled={form}>Open Form</button>
            )}

            {form && (
                <div className="tab">
                    <h1 onClick={()=> setIsVisible("login")}>Login</h1>
                    <h1 onClick={()=> setIsVisible("register")}>Register</h1>
                    <button onClick={()=> {setForm(false) ;setIsVisible("login")}}>X</button>
                </div>
            )}

            {form && isvisible == "login" && (
                <div className="login">
                    <input type="email" placeholder="Email"/>
                    <input type="password" placeholder="Password"/>
                    <button>Login</button>
                </div>

            )}


            {form && isvisible == "register" && (
                <div className="register">
                    <input type="text" placeholder="Name"  />
                    <input type="email" placeholder="Email"/>
                    <input type="password" placeholder="Password"/>
                    <button>Register</button>
                </div>

            )}

            
        </div>
    )
}