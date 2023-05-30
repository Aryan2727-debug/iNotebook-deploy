import React from "react";

function Footer(){
    return(
        <>
         <footer style={{width : "100%"}} className="bg-light text-center text-white">
  
            <div style={{width : "100%", backgroundColor : "white"}} className="container p-4 pb-0">
                
                <section class="mb-4">
                
                <a className="btn text-white btn-floating m-1" style={{backgroundColor: "#dd4b39"}} href="mailto:shouriearyandev@gmail.com" role="button"><i className="fab fa-google"></i></a>

                <a className="btn text-white btn-floating m-1" style={{backgroundColor: "#ac2bac"}} href="https://www.instagram.com/aryan_shourie/" role="button"><i className="fab fa-instagram"></i></a>
                
                <a className="btn text-white btn-floating m-1" style={{backgroundColor: "#0082ca"}} href="https://www.linkedin.com/in/aryandev-shourie-175025229/" role="button"><i className="fab fa-linkedin-in"></i></a>
                
                <a className="btn text-white btn-floating m-1" style={{backgroundColor: "#333333"}} href="https://github.com/Aryan2727-debug" role="button"><i className="fab fa-github"></i></a>

                </section>
                
            </div>
    
            <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)", color : "black"}}>
                © 2022 Copyright:
                <br/>
                <p className="text-black" style={{color : "black"}}>Aryan Dev Shourie</p>
            </div>
  
        </footer>
        </>
    );
};

export default Footer;