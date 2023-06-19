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
                        contacts.map((contact)=><Cbutton title="LinkedIn" img={contact.image} url={contact.link}/>)
                    }
                {/* 
                <Cbutton title="Twitter" img={Twitter} url="https://twitter.com/Kesavaraman_M_R/"/>
                <Cbutton title="GCloud" img={Gcloud} url="https://www.cloudskillsboost.google/public_profiles/ed4f1d07-0b19-4364-9065-9b289cab7d58"/>
                <Cbutton title="Google Developers" img={Gdev} url="https://developers.google.com/profile/u/113000277420584948589"/>
                <Cbutton title="Youtube" img={Youtube} url="https://www.youtube.com/channel/UCoH5UWnGH4QSCfQWm9FRWkw"/> */}
                </section>
            </section>
        </div>
    );
}

export default Contact;
