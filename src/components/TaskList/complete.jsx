const Complete=({data})=> {
    return ( 
    <div className="bg-green-500 h-full p-5 w-[300px] rounded-xl flex-shrink-0 ">
                <div className="flex justify-between items-center">
                    <h3 className="bg-red-600 px-3 py-1 text-sm rounded ">{data.category}</h3>
                    <h4 className="text-sm">{data.date}</h4>
                </div>
                <h2 className="mt-5 text-2xl font-semibold">{data.title}</h2>
                
                <p className="tezt-sm mt-2">
                {data.description}
                </p>
                <div className="mt-2">
                    <button className="bg-blue-600 py-2 px-3 text-sm mt-2 w-full">Completed Task</button>
                </div>
    </div> );
}

export default Complete;