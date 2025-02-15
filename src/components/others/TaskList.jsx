/* eslint-disable react/prop-types */
import Accept from "../TaskList/Accept"
import Complete from "../TaskList/Complete";
import Failed from "../TaskList/Failed";
import New  from "../TaskList/New";
const TaskList = ({data}) => {
    return (  
        <div id="taskList" className="h-[55%] overflow-x-auto  w-full mt-10 py-5 flex justify-start items-center gap-5">
            {data.tasks.map((elem,idx)=>{
                
                if(elem.new_task){
                    return <New key ={idx} data={elem}/>
                }
                
                if(elem.active){
                    return <Accept key ={idx} data={elem}/>
                }
                
                if(elem.completed){
                    return <Complete key ={idx} data={elem}/>
                }
                if(elem.failed){
                    return <Failed key={idx} data={elem}/>
                }
            })}
        </div>
    );
}

export default TaskList;