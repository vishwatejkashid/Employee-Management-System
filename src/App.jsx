// import React from 'react';
import Login from "./components/Auth/login";
import {useContext, useEffect, useState } from "react";
import Admin from "./components/Dashboard/Admin";
// import { getLocalStorage, setLocalStorage } from "./utils/LocalStorage";
import Employee from "./components/Dashboard/Employee";
// import { getLocalStorage } from "./utils/LocalStorage";
import { AuthContext } from "./context/AuthProvider";


const App = () =>{
  const [user,setUser]= useState(null)

  const authData = useContext(AuthContext)
  
  useEffect(()=>{
    if(authData){
      const loggedInUser = localStorage.getItem('loggedInUser')
      if(loggedInUser){
        setUser(loggedInUser.role)
      }
    }
  },[authData])
  const handleLogin = (email, pass) =>{
    if(email == 'admin@123' && pass =='123'){
      setUser('admin')
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
    }
    else if (authData && authData.employees.find((e)=>email == e.email && e.password == pass)){
      setUser('employees')
      localStorage.setItem('loggedInUser',JSON.stringify({role:'employee'}))
    }else{
      alert("Invalid Credentials")
    }
}

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user == 'admin' ? <Admin/>: <Employee/>}
    </>
   );
}

export default App;