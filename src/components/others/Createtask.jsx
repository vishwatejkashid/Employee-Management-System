import { useState } from "react";

const Createtask =() =>{
    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')
    const [assign, setAssign] = useState('')
    const [category, setCategory] = useState('')
    const [description, setDescription] = useState('')

    const [newTask , setnewTask] = useState({})
    const handlelogin = (e) =>{
        e.preventDefault()
        setnewTask({title,date,assign,category,description,active:false,new_task:true,completed:false,failed:false})
        const data = JSON.parse(localStorage.getItem('employees'))
        data.forEach((elem)=>{
            if(assign == elem.firstname){
                elem.tasks.push(newTask)
                console.log(elem.tasks)
            }
        })
        setTitle('')
        setDate('')
        setAssign('')
        setCategory('')
        setDescription('')
    }
    return ( 
        <div className="p-5 bg-[#1c1c1c] mt-7 rounded">
                <form 
                onSubmit={(e)=>{
                    handlelogin(e);
                }} 
                className="flex flex-wrap w-full  items-start justify-between" >

                    <div className="w-1/2">
                        <div >
                            <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
                            <input value={title} onChange={(e)=>{
                                setTitle(e.target.value)
                            }} className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4" type="text" placeholder="Enter Title of Task"></input>
                        </div>
                        <div >
                            <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
                            <input value={date} onChange={(e)=>{
                                setDate(e.target.value)
                            }} className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4" type="date"/>
                        </div>
                        <div >
                            <h3 className="text-sm text-gray-300 mb-0.5">Assign to</h3>
                            <input value={assign} onChange={(e)=>{
                                setAssign(e.target.value)
                            }} className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4" type="text" placeholder="Employee Name" />
                        </div>
                        <div>
                            <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
                            <input value={category} onChange={(e)=>{
                                setCategory(e.target.value)
                            }} className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4" type="text" placeholder="Design, dev ,etc" />
                        </div>
                    </div>
                    <div  className="w-1/2 flex flex-col items-start">
                        <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
                        <textarea value={description} onChange={(e)=>{
                            setDescription(e.target.value)
                        }} className="w-full h-44 text-sm  px-4 py-2 rounded outline-none bg-transparent border-[1px] border-gray-400" id="" ></textarea>
                        <button className="bg-emerald-500  py-3 hover:bg-emerald-600 px-5 rounded text-base mt-4 w-full">Create Task</button>
                    </div>
                   
                    
                </form>
           </div>
     );
}

export default Createtask;