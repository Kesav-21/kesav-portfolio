import React from "react";
import Certcard from "../Components/Certcard";
import '../Assets/Styles/Certification.css'

const Certification=()=>{
    return (
        <div className="container">
            <div className="content-section">
        <h1 className="title blue">Certification Details</h1>
        <div>
        <h2 style={{textAlign:"center",marginBottom:"10px"}}>Certification Courses</h2>
        <section className="certification-section">
            <Certcard certificate="Responsive Web Design" provider="FreeCodeCamp" date="May 2021"/>
            <Certcard certificate="JavaScript Algorithms and Data Structures" provider="FreeCodeCamp" date="Jul 2021"/>
            <Certcard certificate="Front-End Development Libraries" provider="FreeCodeCamp" date="Oct 2021"/>
            <Certcard certificate="Python for Data Science, AI & Development" provider="Coursera (IBM)" date="Oct 2021"/>
            <Certcard certificate="Data Analysis With Python: Zero to Pandas" provider="Jovian.ai" date="Oct 2020"/>
            <Certcard certificate="Front-End Web Development with React" provider="Coursera" date="Nov 2022"/>
        </section>
        </div>
        <div>
        <h2 style={{textAlign:"center",margin:"10px 0px"}}>Experience & Internship</h2>
        <section className="certification-section">
            <Certcard certificate="Web Development Intern" provider="The Sparks Foundation" date="Mar 2022"/>
            <Certcard certificate="Graphic Designer" provider="OneYes Technologies" date="Nov 2020"/>
            <Certcard certificate="Web Development Intern" provider="The Sparks Foundation" date="Feb 2023"/>
            <Certcard certificate="Full stack Web Developer" provider="TripoSaints" date="Mar 2023-Present"/>
        </section>
        </div>
        </div>
        </div>
    )
}
export default Certification;