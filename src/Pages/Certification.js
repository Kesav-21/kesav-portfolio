import React from "react";
import Certcard from "../Components/Certcard";
import '../assets/styles/Certification.css';
import {education,certifications, internships} from '../data/certifications';

const Certification=()=>{
    return (
        <div className="container">
            <div className="content-section">
        <h1 className="title blue">Education and Experience</h1>
        <div>
        <h2 style={{textAlign:"center",margin:"10px 0px"}}>Education</h2>
        <section className="certification-section">
            {
                education.map((ele)=><Certcard certificate={ele.institute} provider={ele.course} date={ele.duration} grade={ele.grade} edu={true}/>)
            }
        </section>
        </div>
        <div>
        <h2 style={{textAlign:"center",marginBottom:"10px"}}>Certification Courses</h2>
        <section className="certification-section">
            {
                certifications.map((cert)=><Certcard certificate={cert.title} provider={cert.provided} date={cert.issued}/>)
            }
        </section>
        </div>
        <div>
        <h2 style={{textAlign:"center",margin:"10px 0px"}}>Experience & Internship</h2>
        <section className="certification-section">

            {
                internships.map((intern)=><Certcard certificate={intern.title} provider={intern.company} date={intern.experience}/>)
            }
        </section>
        </div>
        </div>
        </div>
    )
}
export default Certification;