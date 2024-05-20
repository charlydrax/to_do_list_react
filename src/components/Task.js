import "../style/Task.css"
import React from "react"


function Task() {
        const tacheJson = localStorage.getItem('task') || null;
        const tache = JSON.parse(tacheJson)

        function saveToLocalStorage(name){
            //convertion de l'objet en chaine, pour que le format soit lisible par le JSON
            localStorage.setItem('task', JSON.stringify(name))
        }

        function RemoveTask(task) {

        // let table = JSON.parse(localStorage.getItem('task'))
        // console.log(table)
        console.log(task.idTask)
        // tache.splice(task.idTask,1);
        // saveToLocalStorage(task, task)


            {localStorage.removeItem(task.inputValueName)}
            // {console.dir(task.inputValueName)}
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
                        <a href="#" onClick={RemoveTask(task)}>supprimer</a> 
                    </li>
                ) :
                <li id={task.idTask} key={task.idTask}>
                        {`${task.inputValueName}`}
                        <a href="#" onClick={RemoveTask(task)}>supprimer</a>
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