import { useState } from "react"

const TodoInput = (props) => {
    const input = ''
    const { testFunction } = props

    const handleClick = () => {
        alert(`Add new ${valueInput}`)
        testFunction(valueInput)


    }
    const handleChange = (name) => {
        setValueInput(name)

    }
    const [valueInput, setValueInput] = useState(input)

    return (
        <>
            <div className='todo-input'>
                <input onChange={(event) => { handleChange(event.target.value) }} type='text' placeholder='type sth' />
                <button style={{ cursor: "pointer" }} onClick={handleClick}>Add</button>

                <div >
                    My text inb: {valueInput}
                </div>
            </div>

        </>
    )
}
export default TodoInput