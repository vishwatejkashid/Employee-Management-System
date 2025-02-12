const Header = () => {
    const logoutuser = () =>{
        localStorage.setItem('loggedInUser','')
        window.location.reload()
    }
    
    return ( 
    <div className="flex justify-between items-end">
        <h1 className="text-xl">Hello, <br/> <span className="text-2xl">Username👏</span></h1>
        <button onClick={logoutuser} className="bg-red-600 text-white text-medium font-medium rounded-sm px-5 py-2">Log out</button>
    </div>
    );
}

export default Header;