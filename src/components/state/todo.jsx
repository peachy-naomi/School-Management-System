import { useState } from "react";

export default function Practice4(){
    const [tasks, setTasks] = useState([])
    const [userInput, setUserInput] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    return(
        <div>
            <input type="text" placeholder="Enter Task Here" value={userInput} onChange={(e) => setUserInput(e.target.value)} />
            <button onClick={()=>{
                setTasks([...tasks, userInput])
                setUserInput("")
            }} disabled={userInput.trim() === ""}>Add Task</button>
            <div className="card">
                {tasks.map((task, index) =>( 
                <p key={index}>{task} <span className="span" onClick={()=>{
                    setTasks(tasks.filter((_,i) => i !== index))
                }}>Delete</span></p> 
                ))}
                <button onClick={()=> {
                    if (tasks.length === 0){
                        setErrorMessage("No tasks available")
                        setTimeout(()=>{setErrorMessage("")}, 3000)

                    } else {
                        setTasks([])
                        setErrorMessage("Task cleared successfully")
                        setTimeout(()=>{setErrorMessage("")}, 3000)
                        

                    }
                }}>Clear Task</button>
                { errorMessage && (
                    <p>{errorMessage}</p>
                )}
                
            </div>

                
            
        </div>
    )
}