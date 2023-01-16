import React from "react";

const Progress=(props)=>{
    return(
    <section className="skill-progress">
        <img src={props.img} width={30} height={30} alt={props.title}/>
        <label htmlFor={props.title}>{props.title} :</label>            
        <progress id={props.title} value={props.value} max="100"> {props.value}% </progress>
    </section>
    );
}

export default Progress;