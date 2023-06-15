import React, { useEffect, useState } from "react";
import '../Assets/Styles/Works.css'
import Card from "../Components/Card";
import Bank from "../Assets/Images/bank.jpg";
import Quote from "../Assets/Images/quote.jpg";
import Calc from "../Assets/Images/calculator.jpg";
import Clock from "../Assets/Images/clock.jpg";
import Survey from "../Assets/Images/survey.jpg";
import Mdown from "../Assets/Images/markdown.png";
import SMach from "../Assets/Images/sound.png";
import Product from "../Assets/Images/product.jpg";
import Pdir from "../Assets/Images/phonebook.png";
import Task from "../Assets/Images/task.jpg";
import Donate from '../Assets/Images/donate.png';
import Work from '../Assets/Images/work.jpg';
import { work_desc } from "../data/work";

const Works=()=>{
    return(
        <div className="container">
            <div className="content-section">
            <h1 className="title">My Works</h1>
                <section className="card-section">
                <Card title="Basic Banking App" img={Bank} work={work_desc[0]}/>
                <Card title="Donate Payment gateway" img={Donate} work={work_desc[1]}/>
                <Card title="Work Tables" img={Work} work={work_desc[2]}/>
                <Card title="Quotes Generator" img={Quote} work={work_desc[3]}/>
                <Card title="Pomorodo Clock" img={Clock} work={work_desc[4]}/>
                <Card title="Calculator" img={Calc} work={work_desc[5]}/>
                <Card title="Survey Form" img={Survey} work={work_desc[6]}/>
                <Card title="Markdown Previewer" img={Mdown} work={work_desc[7]}/>
                <Card title="Sound Machine" img={SMach} work={work_desc[8]}/>
                <Card title="Product Landing Page" img={Product} work={work_desc[9]}/>
                <Card title="Phone Directory" img={Pdir} work={work_desc[10]}/>
                <Card title="Task Adder" img={Task} work={work_desc[11]}/>
                </section>
            </div>
        </div>
    )
}

export default Works;