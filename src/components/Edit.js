import '../style/Edit.css'
import { useState } from 'react';

function Edit({trigger,setTrigger, task,updateTask, idOfTask}) {
    let color = task.color
    let [inputChange, setinputChange] = useState(task.inputValueName);
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
        localStorage.setItem('task', JSON.stringify(updateNewTask))

        updateTask(updateNewTask)
        inputChange = ""
        setinputChange(inputChange)
        setTrigger(false)
    }
    return(trigger) ? (
        <div>
            <input
                className='m-t'
                type="text"
                placeholder='Changez votre tâche'
                value={inputChange}
                onChange={handleChangeValue}
            />
            <div className='buttonContainer updateColor'>
              <div className='colorButtonContainers' id='rouge' onClick={() => color="#EB6553"}>
                <div className='colorButton'>Rouge</div>
              </div>
              <div className='colorButtonContainers' id='violet' onClick={() => color="#976CAC"}>
                <div className='colorButton'>Violet</div>
              </div>
              <div className='colorButtonContainers' id='bleu' onClick={() => color="#4AB2DB"}>
                <div className='colorButton'>Bleu</div>
              </div>
              <div className='colorButtonContainers' id='vert' onClick={() => color="#46B066"}>
                <div className='colorButton' >Vert</div>
              </div>
              <div className='colorButtonContainers' id='jaune' onClick={() => color="#F8AB42"}>
                <div className='colorButton'>Jaune</div>
              </div>
            </div>
            <button className='buttonEdit' onClick={() => savedUpdate(idOfTask)}>Enregistrer les modifications</button>
            <button className='buttonEdit' onClick={() => setTrigger(false)}>Annuler</button>
        </div>
    ) : ""
}

export default Edit