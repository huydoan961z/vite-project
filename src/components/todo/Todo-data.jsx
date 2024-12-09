const TodoData = (props) => {
    console.log(props)
    const { name, age, testFunction, todoList } = props
    if (testFunction) {
        testFunction('hello') // run props as function from dad: app.jsx
    }

    return (
        <>
            <div className='todo-data'>
                <div>this is my name {name}</div>
                <div>this is my age {age}</div>
                <div>{JSON.stringify(todoList)}</div>
            </div>
        </>
    )
}
export default TodoData