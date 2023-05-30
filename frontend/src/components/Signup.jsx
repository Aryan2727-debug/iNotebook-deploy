import React from "react";
import Footer from "./Footer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup(props){

  const[credentials , setCredentials] = useState({name: "" , email: "", password: "" , cpassword: ""});
  let navigate = useNavigate();

  const handleSubmit = async (e) => {

    e.preventDefault();

    const {name , email , password} = credentials;

    const response = await fetch("http://localhost:5000/api/auth/createuser", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name , email , password})
    });

    const json = await response.json();
    console.log(json);
      // Save the auth token and redirect
      localStorage.setItem('token', json.authtoken); 
      navigate("/");
      props.showAlert("Account Created Successfully" , "success");
  

};

const onChange = (e)=>{
    setCredentials({...credentials, [e.target.name]: e.target.value})
};

    return(
      <div>

          <h2>Create a new Account!</h2>

          <form onSubmit={handleSubmit}>

            <div className="mb-3">
              <label htmlFor="name">Name</label>
              <input type="text" className="form-control" onChange={onChange} id="name" name="name" placeholder="Your name"/>
            </div>

            <div className="mb-3 my-3">
              <label htmlFor="email">Email address</label>
              <input type="email" className="form-control" onChange={onChange} id="email" name="email" aria-describedby="emailHelp" placeholder="Your Email" required/>
            </div>

            <div className="mb-3">
              <label htmlFor="password">Password</label>
              <input type="password" className="form-control" onChange={onChange} id="password" name="password" placeholder="Password" required minLength={5}/>
            </div>

            <div className="mb-3">
              <label htmlFor="cpassword">Confirm Password</label>
              <input type="password" className="form-control" onChange={onChange} id="cpassword" name="cpassword" placeholder="Confirm Password" required minLength={5}/>
            </div>

            <button type="submit" className="btn btn-dark">Signup</button>
        </form>

        <br/>

        <br/>

        <br/>

        <br/>

        <Footer/>

      </div>
      
    );
};

export default Signup;