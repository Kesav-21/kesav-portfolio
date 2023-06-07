import React from "react";
import '../Assets/Styles/Skills.css'
import Progress from "../Components/Progress.js";
import HTML from "../Assets/Images/html.png";
import css from "../Assets/Images/css.png";
import JS from "../Assets/Images/javascript.png";
import BS from "../Assets/Images/bootstrap.png";
import RJS from "../Assets/Images/reactjs.png";
import SQL from "../Assets/Images/sql.png";
import PHP from "../Assets/Images/php.png";
import JAVA from "../Assets/Images/java.png";
import PYTHON from "../Assets/Images/python.png";
import NJS from "../Assets/Images/nodejs.png";
import Cplus from "../Assets/Images/c-plus.png"
import Linux from "../Assets/Images/linux.png";
import PS from "../Assets/Images/photoshop.png";
import Gcloud from "../Assets/Images/gcloud.png";
import Git from "../Assets/Images/git.png";


const Skills=()=>{
    return(
        <div className="container">
        <div className="content-section">
            <p>My Skills</p>
            <section className="skill-container">
                <Progress title="HTML" value="90" img={HTML}/>
                <Progress title="CSS" value="80" img={css}/>
                <Progress title="JavaScript" value="75" img={JS}/>
                <Progress title="Bootstrap" value="80" img={BS}/>
                <Progress title="ReactJS" value="75" img={RJS}/>
                <Progress title="SQL" value="60" img={SQL}/>
                <Progress title="Php" value="40" img={PHP}/>
                <Progress title="Java" value="70" img={JAVA}/>
                <Progress title="Python" value="80" img={PYTHON}/>
                <Progress title="NodeJs" value="40" img={NJS}/>
                <Progress title="C++" value="40" img={Cplus}/>
            </section>
            <section className="other-skills-container">
                <h2>Other Skills : </h2>
                <section className="other-skills">
                <img src={Linux} width={40} height={40} alt="Linux"/>
                <img src={Gcloud} width={40} height={40} alt="GCloud"/>
                <img src={Git} width={40} height={40} alt="Git"/>
                <img src={PS} width={40} height={40} alt="Photoshop"/>
                </section>
            </section>
        </div>
        </div>
    )
}

export default Skills