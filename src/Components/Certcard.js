import React, { useEffect, useState } from "react";

const Certcard=(props)=>{
    const [isEducation,setIsEducation]=useState(false);
    useEffect(()=>{
        const edu=(edu)=>{
            if(edu)
            setIsEducation(true)
        }
        edu(props.edu)
    },[props.edu])
    
    return(
        <div className="certification-card">
            <hr />
            <h3 style={{color:"#008cff"}} >{props.certificate}</h3>
            {isEducation ? <i>{props.provider}</i>:<i>by {props.provider}</i>}
            <small>{props.date}</small>
            {
                isEducation && <small>Grade: {props.grade}</small>
            }
            <hr />            
        </div>
    )
}

export default Certcard;