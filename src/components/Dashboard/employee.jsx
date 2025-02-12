import Header from "../others/Header";
import TaskBox from "../others/TaskBox";
import TaskList from "../others/TaskList";
const Employee = ({data}) => {
    return ( 
        <div className="p-10 bg-[#1C1C1C] h-screen">
           <Header />
           <TaskBox data={data}/>
           <TaskList data={data}/>  
        </div>
     );
}

export default Employee;