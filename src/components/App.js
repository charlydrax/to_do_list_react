import Header from './Header'
import Cart from './Cart'
import '../App.css';
import { useState, useEffect } from 'react'
import Task from './Task'



function App() {
  const savedTask = localStorage.getItem('task')
	const [task, updateTask] = useState(savedTask ? JSON.parse(savedTask) : [])//condition qui vérifie si il y a déjà des tâche, sinon 'créer un tableau/espace dans le local
  useEffect(() => {
		localStorage.setItem('task', JSON.stringify(task)) //on ajoute dans le localStorage
	}, [task])
  return (
    
    <div>
      <Header />
      <Cart task={task} updateTask={updateTask}/>
      <Task/>
    </div>
  )

}

export default App
