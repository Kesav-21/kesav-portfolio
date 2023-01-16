import React from "react";

const Card=(props)=>{
    return (
        <div className="card">
            <a href={props.url} target="_blank" rel="noreferrer">
            <img src={props.img} width={100} height={100} alt={props.title}/>
            <h5>{props.title}</h5>
            </a>
        </div>
    )
}

export default Card;