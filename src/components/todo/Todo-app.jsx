import TodoData from './Todo-data'
import TodoInput from './Todo-input'
import './todo.css'
import ReactLogo from '../../assets/react.svg'
import { useState } from 'react'

const TodoApp = () => {
    const [todoList, setToDoList] = useState([

    ])
    const testFunction = (name) => {
        const setNewData = {
            id: todoList.length + 1,
            name: name
        }

        setToDoList([...todoList, setNewData])

    }
    const handleDelete = (id) => {
        const newTodoListAfterDelete = todoList.filter(item => item.id != id)
        setToDoList(newTodoListAfterDelete)
    }




    return (
        <>
            <div className="todo-container">
                <div className="todo-title">Todo List </div>
                <TodoInput
                    testFunction={testFunction}
                />

                {todoList.length === 0 ?
                    (<div className='react-logo'>
                        <img className='logo' src={ReactLogo} alt="" />
                    </div>) : (<TodoData
                        todoList={todoList}
                        deleteList={handleDelete}
                    />)}

            </div>
        </>
    )
}

export default TodoApp