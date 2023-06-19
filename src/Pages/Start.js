import React from "react";
import {Link} from "react-router-dom";
import '../assets/styles/Start.css'

const Start=()=>{
    return (
        <div className="start">
            <h1>Welcome to Kesavaraman PortFolio</h1>
            <section className="start-ani">
                <div id="hd-img">
            <img id="img-down" src='images/hand-down.png' width={50} height={50} alt="hand-down"/>
            <img id="img-down" src='images/hand-down.png' width={50} height={50} alt="hand-down"/>
            <img id="img-down" src='images/hand-down.png' width={50} height={50} alt="hand-down"/>
            </div>
            <img id="img-rgt" src='images/hand-right.png' width={90} height={90} alt="hand-right"/>
            <Link to="/home"><button className="btn">Explore More about me</button></Link>
            <img id="img-lft" src='images/hand-left.png' width={90} height={90} alt="hand-left"/>
            </section>
        </div>
    )
}

export default Start;