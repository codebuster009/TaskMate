import React from "react";
export default function Input(props) {
    return(
       <div className="input">
        <input type="text" placeholder="Enter your Tasks" className="input-text" onChange={props.toogle} value={props.inputText}/>
        <button onClick={props.addTask}>Add Task</button>
       </div>
    )
}