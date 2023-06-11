import React from "react";
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

const Works=()=>{
    return(
        <div className="container">
            <div className="content-section">
            <h1 className="title">My Works</h1>
                <section className="card-section">
                <Card title="Basic Banking App" img={Bank} url="https://spark-kesav.000webhostapp.com/"/>
                <Card title="Donate Payment gateway" img={Donate} url="https://dopayint.netlify.app"/>
                <Card title="Work Tables" img={Work} url="http://kesav-21.github.io/worktables/"/>
                <Card title="Quotes Generator" img={Quote} url="https://kesav-21.github.io/RandomQuote/"/>
                <Card title="Pomorodo Clock" img={Clock} url="https://kesav-21.github.io/Build-25-5-clock/"/>
                <Card title="Calculator" img={Calc} url="https://kesav-21.github.io/SimpleJSCalculator/"/>
                <Card title="Survey Form" img={Survey} url="https://kesav-21.github.io/SurveyForm/"/>
                <Card title="Markdown Previewer" img={Mdown} url="https://kesav-21.github.io/MarkDownPreviewer/"/>
                <Card title="Sound Machine" img={SMach} url="https://kesav-21.github.io/SoundMachine/"/>
                <Card title="Product Landing Page" img={Product} url="https://kesav-21.github.io/ProductLandingPage/"/>
                <Card title="Phone Directory" img={Pdir} url="https://kesav-21.github.io/Phone-Directory/"/>
                <Card title="Task Adder" img={Task} url="https://tasktrackerkesav.netlify.app/"/>
                </section>
            </div>
        </div>
    )
}

export default Works;