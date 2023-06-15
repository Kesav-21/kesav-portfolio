import React,{useEffect, useState} from "react";
import Modal from "./Modal";

const Card=(props)=>{
    const [showModal,setShowModal]=useState(false);
    const [data,setData]=useState({
        title:"",
        tech:[],
        desc:"",
        github:"",
        live:""
    });
const handleClick=async()=>{
    console.log(props.work)
    setData({
        title:props.work.title,
        tech:props.work.tech,
        desc:props.work.desc,
        github:props.work.github,
        live:props.work.live
    })
    setShowModal(true)
    console.log(data)
}
const handleClose=()=>{
    setShowModal(false)
}
    return (
        <div className="card">
            <Modal show={showModal} handleClose={handleClose} work={props.work}>
                <div>
                    <h3>Description</h3>
                    <div>
                        <div>
                        <h3>Title:</h3>
                        <p> {data.title}</p>
                        </div>
                        <div>
                        <h3>Technology Used:</h3>
                        <ul>{data.tech.map((ele)=> 
                        <li>
                            {ele}
                        </li>   
                    )}</ul>
                    </div>
                    <div>
                    <h3>Description:</h3>
                    <p>{data.desc}</p>
                    </div>
                    <div>
                        <h3>Github Link:</h3>
                        <a href={`${data.github}`}>{data.github}</a>
                    </div>
                    <div>
                        <h3>Live Site:</h3>
                        <a href={`${data.live}`}>{data.live}</a>
                    </div>
                    </div>    
                </div>
            </Modal>
            <div onClick={handleClick}>
            <img src={props.img} width={100} height={100} alt={props.title}/>
            <h5>{props.title}</h5>
            </div>
        </div>
    )
}

export default Card;