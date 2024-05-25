import "../style/Task.css"
import React from "react"
import { useState } from "react";
import Edit from './Edit'

console.log(useState)

function Task({task, updateTask}) {
    const [trigger, setTrigger] = useState(false);
    let [idOfTask, setidOfTask] = useState("");


        let tableTest = []
        if(task != null){
            let taskLg = task.length
            for(let i=0; i < taskLg;i++){
                tableTest.push(task[i])
            }
        }
        function RemoveTask(id) {
            //supprimer tout le local storage puis le reremplir avec les info stocké dans tableTest

            const updateNewIdTask = task.filter((_,index)=>
                index !== id
            )
            // console.log(tableTest[id].idTask)
            console.log(updateNewIdTask)
                replaceId(updateNewIdTask)
            localStorage.setItem('task', JSON.stringify(updateNewIdTask))

            updateTask(updateNewIdTask)

        }
        function replaceId(updateNewIdTask) {
            let updateNewIdTaskLg = updateNewIdTask.length

            for(let i=0; i < updateNewIdTaskLg;i++){
                updateNewIdTask[i].idTask = i
            }
        }
        // let idOfTask
        function Active(id) {
            setTrigger(true)
            idOfTask = id
            setidOfTask(idOfTask)
        }

        return (
        <React.Fragment>
            <ul>    
                {
                    task ?
                    task.map((task) =>
                        <li id={task.idTask} key={task.idTask}>
                            {`${task.inputValueName}`}
                            <p onClick={() =>RemoveTask(task.idTask)}>supprimer</p>
                            <p onClick={() =>Active(task.idTask)}>Modifier</p>

                        </li>
                    ) : null
                }
            </ul>
            <Edit trigger={trigger} setTrigger={setTrigger} task={task} updateTask={updateTask} idOfTask={idOfTask}/>
        </React.Fragment>
    );
}
export default Task