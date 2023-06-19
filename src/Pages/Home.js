import React from "react";
import "../assets/styles/Home.css";
import { Link } from "react-router-dom";

const Home=()=>{
    return(
        <div className="container">
            <div className="content-section" >
                <div className="text-section">
                    <div className="content">
                        <h1 id="tname">Kesavaraman</h1>
                        <h3>MERN Stack Developer</h3>
                        <div className="image-section">
                    <img src='images/K.jpg' alt="kesav-profile"/>
                </div>
                        <p>Hi! I'm Kesavaraman, a passionate self-taught Full Stack web developer and a graduand in Computer Science from Panimalar Engineering College. I'm a Tech enthusiast and a passionate learner who's always willing to learn and work across technologies and domains bringing you programming and design from the future.</p>
                        <div class="buttondiv">
                            <a className="button" href="https://Kesav-21.github.io/ProfilePage">Profile Page</a>
                        <a className="button" href="https://Kesav-21.github.io/Kesav-CV">Resume</a>
                        <Link className="button" to="/skills">My Skills</Link>
                        <Link className="button" to="/certification">Certification</Link>
                        <Link className="button" to="/works">My Works</Link>
                        <Link className="button" to="/contactme">Contact Me</Link>                        
                        </div>
                    </div>
                </div> 
            </div>  
        </div>
    );
}

export default Home;