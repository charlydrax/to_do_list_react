import "../style/Task.css"
import React from "react"
import { useState } from "react";
import Edit from './Edit'

console.log(useState)

function Task({task, updateTask}) {
    const [trigger, setTrigger] = useState(false);


        let tableTest = []
        if(task != null){
            let taskLg = task.length
            for(let i=0; i < taskLg;i++){
                tableTest.push(task[i])
            }
        }
        function RemoveTask(id) {
            //supprimer tout le local storage puis le reremplir avec les info stocké dans tableTest

            
            
            // tableTest.splice(task.idTask,1)
            // localStorage.removeItem(task)
            const updateNewTask = task.filter((_,index)=>
                index !== id
            )
            replaceId()
            localStorage.setItem('task', JSON.stringify(updateNewTask))
            // localStorage.setItem('task', JSON.stringify(tableTest))
            // let newTask = localStorage.getItem('task')
            updateTask(updateNewTask)
        }
        function replaceId() {
            for(let i=0; i < tableTest.length;i++){
                tableTest[i].idTask = i
            }
        }
        let idOfTask
        function Active(id,task) {
            setTrigger(true)
            idOfTask = id
            console.log(idOfTask)
            console.log(task.idTask)
        }

        return (
        <React.Fragment>
            <ul>    
                {
                    task ?
                    task.map((task,id) =>
                        <li id={id} key={id}>
                            {`${task.inputValueName}`}
                            <p onClick={() =>RemoveTask(id)}>supprimer</p>
                            <p onClick={() =>Active(id,task)}>Modifier</p>
                        </li>
                    ) : null
                }
            </ul>
            {console.log(idOfTask)}
            {/* <Edit trigger={trigger} setTrigger={setTrigger} task={task} idOfTask={idOfTask}/> */}
        </React.Fragment>
    );
}
export default Task