import React, { useState } from "react";
import supabase from "../config/supabaseClient";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
  });
  console.log(formData);

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
      const { data,error } = await supabase.auth.signUp({
        email:formData.email,
        password:formData.password,
        options:{
          data: {
            full_name: formData.fullname,
          }
        }
      })
      

      if(error) throw error 
      alert("check your email for verification link");

    } catch (error) {
      alert(error)
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Fullname"
          name="fullname"
          onChange={handleChange}
        />

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
        <button type="submit">signup</button>
      </form>
      Already have an account?<Link to='/'>Login</Link> 
    </div>
  );
};

export default SignUp;
