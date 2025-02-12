const Accept=({data})=> {
    return ( 
        <div className="bg-yellow-600 h-full p-5 w-[300px] rounded-xl flex-shrink-0 ">
                <div className="flex justify-between items-center">
                    <h3 className="bg-red-600 px-3 py-1 text-sm rounded ">{data.category}</h3>
                    <h4 className="text-sm">{data.date}</h4>
                </div>
                <h2 className="mt-5 text-2xl font-semibold">{data.title}</h2>
                
                <p className="tezt-sm mt-2">
                {data.description}
                </p>
                <div className="flex justify-between mt-4 ">
                    <button className="bg-green-600  px-3 py-2 text-sm">Mark as Completed</button>
                    <button className="bg-red-500 px-3 py-2 text-sm">Mark as Failed</button>

                </div>
        </div>
     );
}

export default Accept;