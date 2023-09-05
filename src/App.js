import {  Routes, Route,Link } from "react-router-dom"

import Home from "./pages/Home"
import Create from "./pages/Create"
import Update from "./pages/Update"
import SignUp from "./pages/Signup";
import Login from "./pages/login";
import { useEffect, useState } from "react";

const App=()=> {
  const [token, setToken]=useState(false)
  if(token){
    sessionStorage.setItem('token',JSON.stringify(token))
  }

  useEffect(()=>{
    if(sessionStorage.getItem('token')){
      let data=JSON.parse(sessionStorage.getItem('token'))
      setToken(data)
    }
console.log(token)
  },[])
    

  return (
    <div>
      <nav>
        <h1>Supa Smoothies</h1>
        
      </nav>
    <Routes>
      <Route path={'/signup'} element={<SignUp/>}/>
      <Route path={'/'} element={<Login setToken={setToken} />}/>
    {token?  
    <Route path={'/home'} element={<Home token={token} />}/>:" "}
      
      <Route path="/create" element={<Create />} />
       <Route path="/:id" element={<Update />} />
    </Routes>

    

    </div>
  );
}

export default App;