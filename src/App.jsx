import TodoData from './components/todo/Todo-data'
import TodoInput from './components/todo/Todo-input'
import './components/todo/todo.css'
import ReactLogo from './assets/react.svg'

const App = () => {
  const huydoan = "deptrai"
  const age = 25;

  return (
    <>
      <div className="todo-container">
        <div className="todo-title">Todo List </div>
        <TodoInput />
        <TodoData
          name={huydoan}
          age={age}
        />
        <div className='react-logo'>
          <img className='logo' src={ReactLogo} alt="" />
        </div>

      </div>
    </>
  )
}

export default App
