import React from "react";
import Cbutton from "../Components/Cbutton";
import "../Assets/Styles/Contact.css";
import LinkedIn from "../Assets/Images/linkedin.png";
import Gmail from "../Assets/Images/gmail.png";
import Github from "../Assets/Images/github.png";
import Instagram from "../Assets/Images/instagram.png";
import Twitter from "../Assets/Images/twitter.png";
import Youtube from "../Assets/Images/youtube.png";
import Hackerrank from "../Assets/Images/hackerrank.png";
import Gcloud from "../Assets/Images/gcloud.png";
import Gdev from "../Assets/Images/google-developers.png"

const Contact=()=>{
    return(
        <div className="container">
            <section className="contact-section">
                <h1 className="title">Profile & Contact</h1>
                <section className="social-link">
                <Cbutton title="LinkedIn" img={LinkedIn} url="https://www.linkedin.com/in/kesavaraman-m-r-43a38b167/"/>
                <Cbutton title="Gmail" img={Gmail} url="mailto:technowkesav@gmail.com"/>
                <Cbutton title="Github" img={Github} url="https://github.com/Kesav-21"/>
                <Cbutton title="Hackerrank" img={Hackerrank} url="https://www.hackerrank.com/cgkesav"/>
                <Cbutton title="Instagram" img={Instagram} url="https://www.instagram.com/kesav_techie/"/>
                <Cbutton title="Twitter" img={Twitter} url="https://twitter.com/Kesavaraman_M_R/"/>
                <Cbutton title="GCloud" img={Gcloud} url="https://www.cloudskillsboost.google/public_profiles/ed4f1d07-0b19-4364-9065-9b289cab7d58"/>
                <Cbutton title="Google Developers" img={Gdev} url="https://developers.google.com/profile/u/113000277420584948589"/>
                <Cbutton title="Youtube" img={Youtube} url="https://www.youtube.com/channel/UCoH5UWnGH4QSCfQWm9FRWkw"/>
                </section>
            </section>
        </div>
    );
}

export default Contact;
