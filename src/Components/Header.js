import React from "react";
import "../assets/styles/Header.css";
import { Link } from "react-router-dom";

const Header=()=>{
    return (
        <div className="nav-head">
            <section>
            <img src='images/K.jpg' alt="Logo" width={80} height={80}/>
            <h3>Kesav PortFolio</h3>
            </section>
            <ul className="nav-bar">
                <li className="nav-link"><Link to="/home"><img src='images/home.png' width={40} height={40} alt="home"/></Link></li>
                <li className="nav-link"><Link to="/works"><img src='images/work.png' width={40} height={40} alt="works"/></Link></li>
                <li className="nav-link"><Link to="/certification"><img src='images/education.png' width={40} height={40} alt="education"/></Link></li>
                <li className="nav-link"><Link to="/skills"><img src='images/skills.png' width={40} height={40} alt="skills"/></Link></li>
                <li className="nav-link"><Link to="/contactme"><img src='images/contact.png' width={40} height={40} alt="contact"/></Link></li>
            </ul>          
        </div>
    )
}

export default Header;