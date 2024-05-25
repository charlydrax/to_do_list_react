import '../style/Edit.css'
import { useState } from 'react';

function Edit({trigger,setTrigger, task,updateTask, idOfTask}) {
    let color
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

        for(let i = 0; i<updateNewTaskLg;i++){
            if(idOfTask === updateNewTask[i].idTask){
                console.log(updateNewTask[i].inputValueName)
                updateNewTask[i].inputValueName = inputChange
                updateNewTask[i].color = color
            }
        }
        replaceId(updateNewTask)
        console.log(updateNewTask)
        localStorage.setItem('task', JSON.stringify(updateNewTask))

        updateTask(updateNewTask)

        setTrigger(false)
    }
    return(trigger) ? (
        <div>
            <input
                type="text"
                placeholder='Changez votre tâche'
                value={inputChange}
                onChange={handleChangeValue}
            />
            <button onClick={() => color="#EB6553"}>Rouge</button>
            <button onClick={() => color="#976CAC"}>Violet</button>
            <button onClick={() => color="#4AB2DB"}>Bleu</button>
            <button onClick={() => color="#46B066"}>Vert</button>
            <button onClick={() => color="#F8AB42"}>Jaune</button>
            <button onClick={() => savedUpdate(idOfTask)}>Enregistrer les modifications</button>
        </div>
    ) : ""
}

export default Edit