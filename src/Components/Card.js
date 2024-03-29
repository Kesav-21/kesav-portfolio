import React,{useState} from "react";
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
    setData({
        title:props.work.title,
        tech:props.work.tech,
        desc:props.work.desc,
        github:props.work.github,
        live:props.work.live
    })
    const div=document.getElementById('scrollup');
        div.scroll({top:0,behavior:"smooth"})
    setShowModal(true)
}
const handleClose=()=>{
    setShowModal(false)
    console.log(props.img)
}
    return (
        <div className="card" key={props.title}>
            <Modal show={showModal} handleClose={handleClose} work={props.work}>
                <div className="modal-section">
                    <h3 className="modal-title">Description for {data.title}</h3>
                    <div className="modal-info">
                        <div className="modal-flex">
                            <h3>Title:</h3>
                            <p> {data.title}</p>
                        </div>
                        <div className="modal-flex">
                        <h3>Technology Used:</h3>
                        <ul className="modal-list">{data.tech.map((ele)=> 
                        <li>
                            {ele}
                        </li>   
                    )}</ul>
                    </div>
                    <div className="modal-flex">
                    <h3>Description:</h3>
                    <p>{data.desc}</p>
                    </div>
                    <div className="modal-flex">
                        <h3>Github Link:</h3>
                        <a href={`${data.github}`}>{data.github}</a>
                    </div>
                    <div className="modal-flex">
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