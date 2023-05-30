import React from "react";
import Footer from "./Footer";

function About(){

    return(
        <>
            <h2>About Us</h2>

            <br/>

            <div className="card" style={{width: "18rem;"}}>
                <div className="card-body">
                    <h5 style={{textDecoration : "underline"}} className="card-title">Services</h5>
                    <p className="card-text">Here are some of the Services provided by us</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"> 1) Create, Edit & Delete your Notes.</li>
                    <li className="list-group-item"> 2) Create your own Account, your Notes will always remain confidential and private.</li>
                    <li className="list-group-item"> 3) Login/Logout from your Account anytime you want.</li>
                </ul>
            </div>
            
            <br/>
            <br/>
            <br/>

            <div className="card" style={{width: "18rem;"}}>
                <div className="card-body">
                    <h5 style={{textDecoration : "underline"}} className="card-title">Technologies Used</h5>
                    <p className="card-text">Here are some of the Technologies used in building this application</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"> 1) For Backend - Node.js, Express.js, MongoDB, Mongoose.js, Postman & MongoDB Compass.</li>
                    <li className="list-group-item"> 2) For Frontend - HTML, Bootstrap, React.js & jQuery.</li>
                </ul>
            </div>

            <br/>

            <Footer/>
        </>
    );
};

export default About;