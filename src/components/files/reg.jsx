import React from "react";
import { useState } from "react";

function Register(){
    const [activeForm, setActiveForm] = useState("login")
    const [isFormVisible, setIsFormVisible] = useState(false)

    return(
        <section className="section">

            <button>Hello there</button>
            {!isFormVisible && (
                <button className="btn" onClick={() => {setIsFormVisible(true)}}>  
                LOGIN</button>
            )}
            

            {isFormVisible && (
                <div className="formtabs">
                <h1 onClick={() => setActiveForm("login")}>Login</h1>
                <h1 onClick={() => setActiveForm("register")}>Register</h1>
                <button onClick={() => setIsFormVisible(false)}>X</button>

            </div>
            )}
                
            <div className="forms">

                {isFormVisible && activeForm === "login" &&(
                    <div className="log">
                        <h1>Login</h1>
                        <input type="email" placeholder="Email"/><br />
                        <input type="password" placeholder="Password"/><br />
                        <button>LOGIN</button>
                        <p>Don't have an account</p><span>Register Here</span>
                    </div>
                )}
                
             
                {isFormVisible && activeForm === "register" && (
                    <div className="reg">
                    <h1>Register</h1>
                    <input type="text" placeholder="Enter your name"/><br />
                    <input type="email" placeholder="Email address"/><br />
                    <input type="password" placeholder="Password" /><br />
                    <button>REGISTER</button>
                    <p>Have an account?</p><span>Login Here</span>
                </div>
                )}
                
            </div>
        </section>
        
    )
}

export default Register