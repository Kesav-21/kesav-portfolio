import React from "react";

const Certcard=(props)=>{
    return(
        <div className="certification-card">
            <hr />
            <h3 style={{color:"#008cff"}} >{props.certificate}</h3>
            <i>by {props.provider}</i><br />
            <small>Issued {props.date}</small>
            <hr />            
        </div>
    )
}

export default Certcard;