import Header from "../others/Header";
import TaskBox from "../others/TaskBox";
import TaskList from "../TaskList/TaskList";
const Employee = () => {
    return ( 
        <div className="p-10 bg-[#1C1C1C] h-screen">
           <Header/>
           <TaskBox/>
           <TaskList/>  
        </div>
     );
}

export default Employee;