import Header from "../others/Header";
import TaskBox from "../others/TaskBox";
import TaskList from "../others/TaskList";
const Employee = (props) => {
    return ( 
        <div className="p-10 bg-[#1C1C1C] h-screen">
           <Header changeUser={props.changeUser} />
           <TaskBox data={props.data}/>
           <TaskList data={props.data}/>  
        </div>
     );
}

export default Employee;