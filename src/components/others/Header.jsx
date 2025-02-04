const Header = () => {
    return ( 
    <div className="flex justify-between items-end">
        <h1 className="text-2xl">Hello, <br/> <span className="text-3xl">Vishwatej 👏</span></h1>
        <button className="bg-red-600 text-white text-lg font-medium rounded-sm px-5 py-2">Log out</button>
    </div>
    );
}

export default Header;