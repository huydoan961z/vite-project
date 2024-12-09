import TodoData from './components/todo/Todo-data'
import TodoInput from './components/todo/Todo-input'
import './components/todo/todo.css'
import ReactLogo from './assets/react.svg'
import { useState } from 'react'

const App = () => {
  const huydoan = "deptrai"
  const age = 25;
  const testFunction = (name) => {
    alert(`hello ${name}`)

  }

  const [todoList, setToDoList] = useState([
    { id: 1, name: '123' },
    { id: 2, name: '12213' },
  ])
  return (
    <>
      <div className="todo-container">
        <div className="todo-title">Todo List </div>
        <TodoInput

        />
        <TodoData
          testFunction={testFunction} // props as function
          name={huydoan}
          age={age}
          todoList={todoList}
        />
        <div className='react-logo'>
          <img className='logo' src={ReactLogo} alt="" />
        </div>
      </div>
    </>
  )
}

export default App