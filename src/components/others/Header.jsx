const Header = ({data}) => {
    console.log(data)
    return ( 
    <div className="flex justify-between items-end">
        <h1 className="text-xl">Hello, <br/> <span className="text-2xl">{data.firstname} 👏</span></h1>
        <button className="bg-red-600 text-white text-medium font-medium rounded-sm px-5 py-2">Log out</button>
    </div>
    );
}

export default Header;