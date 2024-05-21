import "../style/Task.css"
import React from "react"


function Task() {
        const tacheJson = localStorage.getItem('task') || null;
        const tache = JSON.parse(tacheJson)
        let tableTest = []
        if(tache != null){
            let tacheLg = tache.length
            for(let i=0; i < tacheLg;i++){
                tableTest.push(tache[i])
            }
        }

        function RemoveTask(task) {
            //supprimer tout le local storage puis le reremplir avec les info stocké dans tableTest

            
            
            tableTest.splice(task.idTask,1)
            {localStorage.removeItem(task)}
            replaceId()
            {localStorage.setItem('task', JSON.stringify(tableTest))}

        }
        function replaceId() {
            for(let i=0; i < tableTest.length;i++){
                tableTest[i].idTask = i
            }
        }
        return (
        <div>
            <ul>
                
                {
                    tache ?
                tache.map(task => 
                task.inputValue ? (
                    <li id={task.idTask} key={task.idTask}>
                        {`${task.inputValueName}`}
                        <details>
                            <summary>Description</summary>
                            {task.inputValue}
                        </details>
                        <a href="#" onClick={() =>RemoveTask(task)}>supprimer</a> 
                        {/* {localStorage.removeItem(task)}
                        {localStorage.setItem('task', JSON.stringify(tableTest))} */}
                    </li>
                ) :
                <li id={task.idTask} key={task.idTask}>
                        {`${task.inputValueName}`}
                        <a href="#" onClick={() =>RemoveTask(task)}>supprimer</a>
                        {/* {localStorage.removeItem(task)}
                        {localStorage.setItem('task', JSON.stringify(tableTest))} */}
                </li>
                )
                :
                null 
            }

            </ul>
        </div>
    );
}
export default Task