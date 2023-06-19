import React from "react";
import '../assets/styles/Skills.css'
import Progress from "../Components/Progress.js";
import { otherskills, skills } from "../data/skills";



const Skills=()=>{
    return(
        <div className="container">
        <div className="content-section">
            <h1 className="title">My Skills</h1>
            <section className="skill-container">
                {
                    skills.map((skill)=><Progress title={skill.skill} percent={skill.progress} img={skill.image} />)
                }
            </section>
            <section className="other-skills-container">
                <h2>Other Skills : </h2>
                <section className="other-skills">
                    {
                    otherskills.map((oskill)=>
                        <div className="oskill">
                            <img src={oskill.image} width={50} height={50} alt={oskill.skill}/>
                            <p>{oskill.skill}</p>
                        </div>
                    )
                    }
                </section>
            </section>
        </div>
        </div>
    )
}

export default Skills