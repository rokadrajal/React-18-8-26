function TaskList(props) {
    return (
        <>
            <ul>
                {
                    props.data.map((d, index) => {
                        return ( 
                            <li key={index}>{d} <button className="bg-success text-light border-0 px-4 py-2">Complete</button><button className="className= bg-danger text-light border-0 px-4 py-2">Delete</button></li>
                    )
                    })
                }
            </ul>
        </>
    )
}

export default TaskList;