import Createtask from "../others/Createtask";
import Header from "../others/Header";
import AllTask from "./AllTask";

const Admin =() => {
    return ( 
        <div className="h-screen w-full p-5">
           <Header/>
           <Createtask/>
           <AllTask/>
        </div>
     );
}

export default Admin ;