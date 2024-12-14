const TodoData = (props) => {
    console.log(props)
    const { name, age, testFunction, todoList, deleteList } = props
    if (testFunction) {
        testFunction('hello') // run props as function from dad: app.jsx
    }


    return (

        <>
            <div className='todo-data'>
                {todoList.map((item, index) => {
                    return (
                        <>
                            <div className="todoLIST" key={item.id}>
                                <div>{item.name}</div>
                                <button style={{ cursor: 'pointer' }} onClick={() => deleteList(item.id)}>Delete</button>
                            </div>
                        </>
                    )
                })}


            </div>
        </>
    )
}
export default TodoData