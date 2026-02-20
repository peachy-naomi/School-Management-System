import React from "react";
import { useState } from "react";

function School(){
    const [user, setUser] = useState(null)
    if (!user){
        return(
        <div>
            <button onClick={()=> setUser({role:"admin"})}>Admin</button>
            <button onClick={()=> setUser({role:"instructor"})}>Instructor</button>
            <button onClick={()=> setUser({role:"editor"})}>Editor</button>
        </div>
    )
    }
    return(
        <div>
            <h3>Role :{user.role}</h3>
            {user.role === "admin" && <p>Manage Users</p>}
            {user.role === "instructor" && <p>Create  Courses</p>}
            {user.role === "editor" && <p>Edit Post</p>}

            <button onClick={()=> setUser(null)}>Logout</button>
        </div>

    
    )
}

export default School