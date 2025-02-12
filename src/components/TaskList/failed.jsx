const Failed=({data})=> {
    return ( 
        <div className="bg-red-500 h-full p-5 w-[300px] rounded-xl flex-shrink-0 ">
        <div className="flex justify-between items-center">
            <h3 className="bg-red-600 px-3 py-1 text-sm rounded ">{data.category}</h3>
            <h4 className="text-sm">{data.date}</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">{data.title}</h2>
        
        <p className="tezt-sm mt-2">
        {data.description}
        </p>
        <div className="mt-2">
                    <button className="bg-orange-400 mt-2 py-1 text-base w-full text-black">Failed Task</button>
                </div>
    </div> );
}

export default Failed;