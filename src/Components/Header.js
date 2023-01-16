import React from "react";
import "../Assets/Styles/Header.css";
import K from "../Assets/Images/K.jpg";
import Home from "../Assets/Images/home.png";
import Skills from "../Assets/Images/skills.png";
import Education from "../Assets/Images/education.png";
import Contact from "../Assets/Images/contact.png";
import Work from "../Assets/Images/work.png";
import { Link } from "react-router-dom";

const Header=()=>{
    return (
        <div className="nav-head">
            <section>
            <img src={K} alt="Logo" width={80} height={80}/>
            <h3>Kesav PortFolio</h3>
            </section>
            <ul className="nav-bar">
                <li className="nav-link"><Link to="/home"><img src={Home} width={40} height={40} alt="home"/></Link></li>
                <li className="nav-link"><Link to="/works"><img src={Work} width={40} height={40} alt="works"/></Link></li>
                <li className="nav-link"><Link to="/certification"><img src={Education} width={40} height={40} alt="education"/></Link></li>
                <li className="nav-link"><Link to="/skills"><img src={Skills} width={40} height={40} alt="skills"/></Link></li>
                <li className="nav-link"><Link to="/contactme"><img src={Contact} width={40} height={40} alt="contact"/></Link></li>
            </ul>          
        </div>
    )
}

export default Header;