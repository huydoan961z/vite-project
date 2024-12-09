const TodoData = (props) => {
    console.log(props)
    const { name, age, testFunction, todoList } = props
    if (testFunction) {
        testFunction('hello') // run props as function from dad: app.jsx
    }


    return (
        <>
            <div className='todo-data'>
                {todoList.map((item, index) => {
                    return (
                        <>
                            <div className="todoLIST">
                                <div>{item.name}</div>
                                <button>Delete</button>
                            </div>
                        </>
                    )
                })}


            </div>
        </>
    )
}
export default TodoData