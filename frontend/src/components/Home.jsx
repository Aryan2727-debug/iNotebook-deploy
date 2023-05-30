import React from "react";
import Notes from "./Notes";
import Footer from "./Footer";

function Home(props){

    const {showAlert} = props;

    return(
        <div>

            <Notes showAlert={showAlert}/>

            <Footer/>
            
        </div>
    );
};

export default Home;