import '../style/Edit.css'
import { useState } from 'react';

function Edit({trigger,setTrigger, task, idOfTask}) {
    const [inputChange, setinputChange] = useState('');
    const handleChangeValue = (event) => {
            setinputChange(event.target.value);
        };
    function savedUpdate() {

        setTrigger(false)
    }
    console.log(task)
    console.log(idOfTask)

    return(trigger) ? (
        <div>
            <input
                type="text"
                placeholder='Changez votre tâche'
                value={inputChange}
                onChange={handleChangeValue}
            />
            <p>{inputChange}</p>
            <button onClick={savedUpdate}>Enregistrer les modifications</button>
        </div>
    ) : ""
}

export default Edit