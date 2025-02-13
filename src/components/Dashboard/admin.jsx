import Createtask from "../others/Createtask";
import Header from "../others/Header";
import AllTask from "./AllTask";

const Admin =(props) => {
    return ( 
        <div className="h-screen w-full p-5">
           <Header changeUser={props.changeUser}/>
           <Createtask/>
           <AllTask/>
        </div>
     );
}

export default Admin ;