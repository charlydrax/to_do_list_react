import "../style/Task.css"
import React from "react"
import { useState } from "react";
import Edit from './Edit'


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
                        <li id={task.idTask} key={task.idTask} style={{border: "3px solid"+task.color}}>
                            <p className="tacheElement">{`${task.inputValueName}`}</p>
                            <p onClick={() =>Active(task.idTask)}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill={task.color} d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"/></svg></p>
                            <p onClick={() =>RemoveTask(task.idTask)}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill={task.color} d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg></p>
                            {/* <!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}

                        </li>
                    ) : null
                }
            </ul>
            <Edit trigger={trigger} setTrigger={setTrigger} task={task} updateTask={updateTask} idOfTask={idOfTask}/>
        </React.Fragment>
    );
}
export default Task