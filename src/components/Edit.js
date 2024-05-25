import '../style/Edit.css'
import { useState } from 'react';

function Edit({trigger,setTrigger, task,updateTask, idOfTask}) {
    const [inputChange, setinputChange] = useState('');
    const handleChangeValue = (event) => {
            setinputChange(event.target.value);
        };
    function replaceId(updateNewTask) {
        let updateNewTaskLg = updateNewTask.length

        for(let i=0; i < updateNewTaskLg;i++){
            updateNewTask[i].idTask = i
        }
    }
    function savedUpdate(idOfTask) {
        
        const updateNewTask = task
        let updateNewTaskLg = updateNewTask.length
        // console.log(updateNewTaskLg)

        for(let i = 0; i<updateNewTaskLg;i++){
            
            // console.log(idOfTask)
            // console.log(updateNewTask[i].idTask)

            if(idOfTask === updateNewTask[i].idTask){
                // console.log(updateNewTask[idOfTask-1].inputValueName)
                // console.log(inputChange)
                console.log(updateNewTask[i].inputValueName)
                updateNewTask[i].inputValueName = inputChange
            }
        }
        replaceId(updateNewTask)
        console.log(updateNewTask)
        localStorage.setItem('task', JSON.stringify(updateNewTask))

        updateTask(updateNewTask)

        setTrigger(false)
    }
    // console.log(task)

    return(trigger) ? (
        <div>
            <input
                type="text"
                placeholder='Changez votre tâche'
                value={inputChange}
                onChange={handleChangeValue}
            />
            <button onClick={() => savedUpdate(idOfTask)}>Enregistrer les modifications</button>
        </div>
    ) : ""
}

export default Edit