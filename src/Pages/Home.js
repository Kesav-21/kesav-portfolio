import React from "react";
import "../Assets/Styles/Home.css";
import K from "../Assets/Images/K.jpg";
import { Link } from "react-router-dom";

const Home=()=>{
    return(
        <div className="container">
            <div className="content-section" >
                <div className="image-section">
                    <img src={K} alt="kesav-profile"/>
                </div>
                <div className="text-section">
                    <div className="content">
                        <h1 id="tname">Kesavaraman</h1>
                        <h3>Web Developer</h3>
                        <p>Hi! I'm Kesav. I'm a Tech enthusiast who enjoys web development, coding, love to learn something new.I'm passionate self-taught front-end developer.</p>
                        <div class="buttondiv">
                        <Link className="button" to="/skills">My Skills</Link>
                        <Link className="button" to="/works">My Works</Link>
                        <Link className="button" to="/contactme">Contact Me</Link>
                        <Link className="button" to="/certification">Certification</Link>
                        <a className="button" href="https://Kesav-21.github.io/Kesav-CV">Resume</a>
                        </div>
                    </div>
                </div> 
            </div>  
        </div>
    );
}

export default Home;