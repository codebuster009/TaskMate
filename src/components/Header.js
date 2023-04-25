import React from "react";
export default function Header({task}) {
    const numDone = task.filter(tas => tas.completed).length
    const numPending = task.filter(tas => !tas.completed).length
    return(
        <div className="header">
        <h1>Done :{numDone || 0} ||  Pending : {numPending ||0}</h1>
        </div>
    )
}