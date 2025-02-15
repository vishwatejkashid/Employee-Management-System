import { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/LocalStorage";

export const AuthContext = createContext()
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)

    useEffect(()=>{
        setLocalStorage();
        const {employees} = getLocalStorage()
        setUser(employees)
    },[])
    return ( 
        <div>
            <div>
                <AuthContext.Provider value={[user,setUser]}>
                    {children}
                </AuthContext.Provider>
            </div>
           
        </div> 
    );
}

export default AuthProvider;