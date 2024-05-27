import '../style/Cart.css'
import { useState } from 'react';

function Cart({ task, updateTask }) {

    let color

    function AddTask(task) {
      let idTask = task.length
        updateTask([...task, {inputValueName,color, idTask}])
        console.log(color)
    }
    const [inputValueName, setInputValueName] = useState('');
    
    const handleChangeName = (event) => {
      setInputValueName(event.target.value);
    };
    return (
        <main>
          <h1>To-Do-List</h1>
            <input
              type="text"
              placeholder='Indiquez le nom de votre tâche'
              value={inputValueName} 
              onChange={handleChangeName}
            />
            <p>Choisissez votre couleur :</p>
            <div className='buttonContainer'>
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
        <button id='add' onClick={() => AddTask(task)}>Ajouter</button>

        <ul className='list-task'>
                    
			  </ul>
        </main>
    )
  
  }
  
  export default Cart
  