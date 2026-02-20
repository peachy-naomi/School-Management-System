import React from "react";
import ball from "../../assets/images/ball.jpg"


function Input(props){
    return(
        <div className="input">
            <input type={props.type}  placeholder={props.message}/>
            <img src={ball} alt="" />  
        </div>

    )
}

export default Input