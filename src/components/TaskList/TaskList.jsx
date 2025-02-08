const TaskList = ({data}) => {
    return (  
        <div id="taskList" className="h-[55%] overflow-x-auto w-full mt-10 py-5 flex justify-start items-center gap-5 flex-nowrap overflox-x-auto ">
            <div className="bg-gray-500 h-full p-5 w-[300px] rounded-xl flex-shrink-0 ">
                <div className="flex justify-between items-center">
                    <h3 className="bg-red-600 px-3 py-1 text-sm rounded ">High</h3>
                    <h4 className="text-sm">20 Feb Jan</h4>
                </div>
                <h2 className="mt-5 text-2xl font-semibold">Make a youtube video</h2>
                
                <p className="tezt-sm mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, beatae quos officia in facilis delectus.
                </p>
            </div>
            <div className="bg-gray-500 h-full p-5 w-[300px] rounded-xl flex-shrink-0 ">
                <div className="flex justify-between items-center">
                    <h3 className="bg-red-600 px-3 py-1 text-sm rounded ">High</h3>
                    <h4 className="text-sm">20 Feb Jan</h4>
                </div>
                <h2 className="mt-5 text-2xl font-semibold">{data.tasks.title}</h2>
                
                <p className="tezt-sm mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, beatae quos officia in facilis delectus.
                </p>
            </div>
            <div className="bg-gray-500 h-full p-5 w-[300px] rounded-xl flex-shrink-0 ">
                <div className="flex justify-between items-center">
                    <h3 className="bg-red-600 px-3 py-1 text-sm rounded ">High</h3>
                    <h4 className="text-sm">20 Feb Jan</h4>
                </div>
                <h2 className="mt-5 text-2xl font-semibold">Make a youtube video</h2>
                
                <p className="tezt-sm mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, beatae quos officia in facilis delectus.
                </p>
            </div>
            <div className="bg-gray-500 h-full p-5 w-[300px] rounded-xl flex-shrink-0 ">
                <div className="flex justify-between items-center">
                    <h3 className="bg-red-600 px-3 py-1 text-sm rounded ">High</h3>
                    <h4 className="text-sm">20 Feb Jan</h4>
                </div>
                <h2 className="mt-5 text-2xl font-semibold">Make a youtube video</h2>
                
                <p className="tezt-sm mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, beatae quos officia in facilis delectus.
                </p>
            </div>
            <div className="bg-gray-500 h-full p-5 w-[300px] rounded-xl flex-shrink-0 ">
                <div className="flex justify-between items-center">
                    <h3 className="bg-red-600 px-3 py-1 text-sm rounded ">High</h3>
                    <h4 className="text-sm">20 Feb Jan</h4>
                </div>
                <h2 className="mt-5 text-2xl font-semibold">Make a youtube video</h2>
                
                <p className="tezt-sm mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, beatae quos officia in facilis delectus.
                </p>
            </div>
        </div>
    );
}

export default TaskList;