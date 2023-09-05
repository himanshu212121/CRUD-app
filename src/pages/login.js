import React, { useState } from "react";
// import supabase from './config/supabaseClient'
import supabase from "../config/supabaseClient";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Login = ({setToken}) => {

  let navigate =useNavigate()

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // console.log(formData);

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }


  async function handleSubmit(e) {
    e.preventDefault();
    try {
  const { data, error } = await supabase.auth.signInWithPassword({
  email: formData.email,
  password: formData.password,
})

      if(error) throw error 
      console.log(data)
      setToken(data)
      navigate('/home')


    } catch (error) {
      alert(error)
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
       <input
          type="email"
          placeholder="Email"
          name="email"
          onChange={handleChange}
        />

        <input 
          type="Password"
          placeholder="Password"
          name="password"
          onChange={handleChange}
        />

        <button type="submit">login</button>
        
      </form>
      dont  have an account?<Link to='/signup'>SignUp</Link> 
    </div>
  );
};

export default Login;
