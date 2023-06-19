import React from "react";
import '../assets/styles/Works.css'
import Card from "../Components/Card";
import { work_desc } from "../data/work";

const Works=()=>{
    return(
        <div className="container" id="scrollup">
            <div className="content-section">
            <h1 className="title">My Works</h1>
                <section className="card-section">
                    {
                        work_desc.map((work)=><Card title={work.title} img={work.image} work={work}/>)
                    }
                </section>
            </div>
        </div>
    )
}

export default Works;