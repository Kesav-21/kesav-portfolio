import React from "react";

const Cbutton=(props)=>{
    return(
        // <div className="social">
        //     <img src={props.img} width={25} height={25} alt={props.name}/>
        //     <a href={props.url} target="_blank">
        //         <button className="social-btn">{props.name}</button>
        //     </a> 
        // </div>
        <div className="social">
            <a href={props.url} target="_blank">
            <img src={props.img} width={100} height={100} alt={props.title}/>
            <h5>{props.title}</h5>
            </a>      
        </div>
    )
}

export default Cbutton;