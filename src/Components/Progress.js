import React from "react";
import { CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';

const Progress=(props)=>{
    return(
    <section className="skill-progress">
        <CircularProgressbarWithChildren 
        value={props.percent}
        circleRatio={0.75}
        styles={buildStyles({
            rotation: 1 / 2 + 1 / 8,
            strokeLinecap: "butt",
            trailColor: "#eee"
            })}>
            <img style={{ width: 70, marginTop: 0 }} src={props.img} alt="doge" />
            <div style={{ fontSize: 12, marginTop: 10,textAlign:"center" }}>
                <strong>{props.title}<br/>{props.percent}/100</strong>
            </div>
        </CircularProgressbarWithChildren>
    </section>
    );
}

export default Progress;