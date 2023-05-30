import React, {useState} from 'react';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';


const Login = (props) => {
    const [credentials, setCredentials] = useState({email: "", password: ""});
    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: credentials.email, password: credentials.password})
        });
        const json = await response.json();
        console.log(json);
        if (json.success){
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken); 
            navigate("/");
            props.showAlert("Login Successful" , "success");
        }
        else{
            alert("Invalid Credentials" , "danger");
        }
    };

    const onChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    };

    return (
        <div>

            <h2>Login into your Account!</h2>

            <form  onSubmit={handleSubmit}>

                <div className="mb-3 my-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input placeholder="Email" type="email" className="form-control" value={credentials.email} onChange={onChange} id="email" name="email" aria-describedby="emailHelp" />
                </div>

                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input placeholder="Password" type="password" className="form-control" value={credentials.password} onChange={onChange} name="password" id="password" />
                </div>

                <button type="submit" className="btn btn-primary">Login</button>
            </form>

            <br/>

            <br/>

            <br/>

            <br/>

            <br/>

            <br/>

            <br/>

            <br/>

            <br/>
        
           <Footer/>
        </div>
    );
};

export default Login;