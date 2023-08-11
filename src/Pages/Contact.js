import React from "react";
import Cbutton from "../Components/Cbutton";
import "../assets/styles/Contact.css";
import { contacts } from "../data/contacts";

const Contact=()=>{
    return(
        <div className="container">
            <section className="contact-section">
                <h1 className="title">Profile & Contact</h1>
                <section className="social-link">
                    {
                        contacts.map((contact)=><Cbutton title={contact.name} img={contact.image} url={contact.link}/>)
                    }
                </section>
            </section>
        </div>
    );
}

export default Contact;
