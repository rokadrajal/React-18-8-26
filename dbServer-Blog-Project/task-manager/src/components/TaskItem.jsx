import TaskList from "./TaskList";

function TaskItem(){
    const data = JSON.parse(localStorage.getItem("mydata"));
    return (
        <>
            <TaskList data={data}/>
        </>
    )
}

export default TaskItem;