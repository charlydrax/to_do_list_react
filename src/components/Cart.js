import '../style/Cart.css'
import { useState } from 'react';

function Cart({ task, updateTask }) {

    let color
    let test


    function AddTask(task) {
      let idTask = task.length
        updateTask([...task, {inputValueName,color, idTask}])
        console.log(color)
    }
    function ColorFunction(colorChose) {
      color = colorChose
      // return color
    }


     // Déclare une variable d'état pour l'input avec une valeur initiale vide
    // const [inputValue, setInputValue] = useState('');
    const [inputValueName, setInputValueName] = useState('');
    // const [colorValue, setColorValue] = useState('');

    // const handleChange = (event) => {
    //   setInputValue(event.target.value);
    // };
    
    const handleChangeName = (event) => {
      setInputValueName(event.target.value);
    };
    // const handleChangeColor = (event) => {
    //   setInputValueName(event.target.value);
    // };


    
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
            <button onClick={() => color="#EB6553"}>Rouge</button>
            <button onClick={() => color="#976CAC"}>Violet</button>
            <button onClick={() => color="#4AB2DB"}>Bleu</button>
            <button onClick={() => color="#46B066"}>Vert</button>
            <button onClick={() => color="#F8AB42"}>Jaune</button>
            {/* <button onClick={test="test"}>Jaune</button> */}
        <button onClick={() => AddTask(task)}>Ajouter</button>

        <ul className='list-task'>
                    
			  </ul>
        </main>
      </div>
    )
  
  }
  
  export default Cart
  