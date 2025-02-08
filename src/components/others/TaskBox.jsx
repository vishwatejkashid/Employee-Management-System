const TaskBox =  ({data}) => {
    return (
        <div className="flex mt-10 justify-between gap-5 ">
            <div className="bg-yellow-600 w-[45%] py-6 px-9 rounded-xl ">
                <h2 className="text-3xl font-semibold">{data.task_counts.new_task}</h2>
                <h3 className="text-2xl font-medium">New Task</h3>
            </div>
            <div className="bg-blue-600 w-[45%] py-6 px-9 rounded-xl ">
                <h2 className="text-3xl font-semibold">{data.task_counts.active}</h2>
                <h3 className="text-2xl font-medium">Accepted</h3>
            </div>
            <div className="bg-red-600 w-[45%] py-6 px-9 rounded-xl ">
                <h2 className="text-3xl font-semibold">{data.task_counts.failed}</h2>
                <h3 className="text-2xl font-medium">Failed</h3>
            </div>
            <div className="bg-green-600 w-[45%] py-6 px-9 rounded-xl ">
                <h2 className="text-3xl font-semibold">{data.task_counts.completed}</h2>
                <h3 className="text-2xl font-medium">Completed</h3>
            </div>
        </div>
      );
}

export default TaskBox;