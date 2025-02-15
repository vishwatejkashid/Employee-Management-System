import { useState } from "react";

const Login = ({handleLogin}) => {
    const [email ,setEmail] = useState('')
    const [pass ,setPass] = useState('')

    const submitHandler = (e) =>{
        e.preventDefault();
        handleLogin(email,pass)
        setEmail('');
        setPass('');

    }
    return ( 
        <>  
        
        <div className='flex h-screen w-screen items-center justify-center'>
            
            <div 
                className='border-2 rounded-xl border-emerald-600 p-20'>
                <form 
                    onSubmit={(e)=>{
                        submitHandler(e);
                    }} 
                    className="flex flex-col items-center justify-center ">

                    <input 
                        value={email} 
                        onChange={(e)=>{
                            setEmail(e.target.value)
                        }} 
                        required 
                        className='outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-gray-400' 
                        type="email" 
                        placeholder="Enter your email"/>

                    <input 
                        value={pass}
                        onChange={(e)=>{
                            setPass(e.target.value)
                        }} 
                        required 
                        className="mt-3 outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-gray-400" 
                        type="password" 
                        placeholder="Enter your password"/>

                    <button 
                        className=" mt-7 text-white outline-none border-none hover:bg-emerald-700 font-semibold bg-emerald-600 w-full text-lg py-2 px-8 rounded-full ">
                        Log in
                    </button>

                </form>

            </div>

        </div>
     
        </>
    ); 
}

export default Login;