function TaskForm() {
    return (
        <section className="container d-flex flex-column gap-3 mt-5">
            <h1>My Tasks</h1>
            <div className=" d-flex gap-3">
                <input type="text" placeholder="New task..." className="px-3 py-2 bg-light border border-secondary w-50" />
                <button className="bg-primary text-light border-0 px-4 py-2">Add</button>
            </div>
        </section>
    )
}

export default TaskForm;