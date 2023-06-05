import React from "react";
import {Link} from "react-router-dom";
import hr from "../Assets/Images/hand-right.png";
import hl from "../Assets/Images/hand-left.png";
import hd from "../Assets/Images/hand-down.png";

const Start=()=>{
    return (
        <div className="start">
            <h1>Welcome to Kesavaraman PortFolio</h1>
            <section class="start-ani">
                <div id="hd-img">
            <img id="img-down" src={hd} width={50} height={50} alt="hand-down"/>
            <img id="img-down" src={hd} width={50} height={50} alt="hand-down"/>
            <img id="img-down" src={hd} width={50} height={50} alt="hand-down"/>
            </div>
            <img id="img-rgt" src={hr} width={90} height={90} alt="hand-right"/>
            <Link to="/home"><button className="btn">Explore More about me</button></Link>
            <img id="img-lft" src={hl} width={90} height={90} alt="hand-left"/>
            </section>
        </div>
    )
}

export default Start;