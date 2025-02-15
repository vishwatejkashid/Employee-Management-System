import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask=()=> {
    const [user,setUser] = useContext(AuthContext) 
    // console.log(authData.employees)
    return (  
        <div className="bg-[#1c1c1c] p-5 rounded mt-5">
            <div className="bg-emerald-400 mb-2 py-2 px-4 flex justify-between rounded">
                    <h2 className='text-lg font-medium w-1/5'>Name</h2>
                    <h3 className='text-lg font-medium w-1/5'>New Task</h3>
                    <h3 className='text-lg font-medium w-1/5' >Active Task</h3>
                    <h3 className='text-lg font-medium w-1/5'>Completed Task</h3>
                    <h3 className='text-lg font-medium w-1/5'>Failed Task</h3>

            </div>
            <div>
                {user.map((elem,idx)=>{
                    return <div key={idx} className=" border-2 mb-2 py-2 px-4 flex justify-between rounded ">
                        <h2 className='text-lg font-medium w-1/5  px-1'>{elem.firstname}</h2>
                        <h3 className='text-lg font-medium w-1/5 text-yellow-600 px-1' >{elem.task_counts.new_task}</h3>
                        <h3 className='text-lg font-medium w-1/5 text-blue-600 px-1'>{elem.task_counts.active}</h3>
                        <h3 className='text-lg font-medium w-1/5 text-green-600 px-1'>{elem.task_counts.completed}</h3>
                        <h3 className='text-lg font-medium w-1/5 text-red-600 px-1'>{elem.task_counts.failed}</h3>

                    </div>
                })}
            </div>
            
            

        </div>
        
    );
}

export default AllTask;