import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Navbar(){

    let navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login")
    }

    let location = useLocation();

    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <Link style={{color : "white"}} to="/" className="navbar-brand mx-2">iNotebook</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link style={{color : "white"}} to="/" className={`nav-link ${location.pathname === "/" ? "active" : ""}`}>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link style={{color : "white"}} to="/about" className={`nav-link ${location.pathname === "/about" ? "active" : ""}`}>About</Link>
                    </li>
                    
                    </ul>

                    {!localStorage.getItem("token") ?<form className="d-flex">
                       <Link to="/login" style={{position:"relative", left:"790%"}} className="btn btn-primary" role="button">Login</Link>
                       <Link to="/signup" style={{position:"relative", left:"800%"}} className="btn btn-primary" role="button">Signup</Link>
                    </form> : <button onClick={handleLogout} style={{position:"relative", left:"85%"}} className="btn btn-primary">Logout</button>}
                    
                </div>
            </nav>
        </>
    );
};

export default Navbar;