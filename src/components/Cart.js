import '../style/Cart.css'
import { useState } from 'react';

function Cart({ task, updateTask }) {

    let color = "black"


    function AddTask(task) {
      let idTask = task.length
      const currentTaskAdded = task.find((task) => task.idTask === idTask)
      if(currentTaskAdded) {
          const taskFilteredCurrentPlant = task.filter(
              (task) => task.idTask !== idTask
          )
          updateTask([
              ...taskFilteredCurrentPlant,
              {inputValueName, color , idTask}
          ])
      }else {
        updateTask([...task, {inputValueName,color, idTask}])
      }
      
    }
    function ColorFunction(colorChose) {
      color = colorChose
    }


     // Déclare une variable d'état pour l'input avec une valeur initiale vide
    // const [inputValue, setInputValue] = useState('');
    const [inputValueName, setInputValueName] = useState('');

    // const handleChange = (event) => {
    //   setInputValue(event.target.value);
    // };
    
    const handleChangeName = (event) => {
      setInputValueName(event.target.value);
    };


    
    // let task =""
    return (
      <div>
        {/* {localStorage.clear()} */}
        <main>
            {/* <input type="text" name="task" placeholder='Indiquez votre tâche'/> */}
            <input
              type="text"
              placeholder='Indiquez le nom de votre tâche'
              value={inputValueName} 
              onChange={handleChangeName}
            />
            {/* <input
              type="text"
              placeholder='Indiquez votre tâche'
              value={inputValue}
              onChange={handleChange}
            /> */}
            <p>Choisissez votre couleur</p>
            <button onClick={ColorFunction("#EB6553")}>Rouge</button>
            <button onClick={ColorFunction("#976CAC")}>Violet</button>
            <button onClick={ColorFunction("#4AB2DB")}>Bleu</button>
            <button onClick={ColorFunction("#46B066")}>Vert</button>
            <button onClick={ColorFunction("#F8AB42")}>Jaune</button>
        <button onClick={() => AddTask(task)}>Ajouter</button>

        <ul className='list-task'>
                    
			  </ul>
        </main>
      </div>
    )
  
  }
  
  export default Cart
  