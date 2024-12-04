const TodoData = (props) => {
    console.log(props)
    const { name, age } = props
    return (
        <>
            <div className='todo-data'>
                <div>this is my name {props.name}</div>
                <div>this is my name {name}</div>
                <div>this is my name {age}</div>

            </div>

        </>
    )
}
export default TodoData