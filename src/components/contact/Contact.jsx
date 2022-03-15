
import React from "react";
import "./contact.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Contact() {
  React.useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <div data-aos="fade-right" className="main" id="contact">
      <div className="contact">
        <h1>Contact</h1>
        <div className="line"></div>
        <div className="contact_inf">
        <div className="parag">
          <h2>Just say Hi</h2>
          <p>
            I'm always open to discuss your/my projects and talk about new
            things.
          </p>

          <p>Let's get in touch and make something amazing together.</p>

          <div className="contact_icon">
            <div className="call">
              <div>Call me at:</div>
              <p>7010502842</p>
              </div>
               <div className="call">
              <div>Mail me at:</div>
              <p>selvakumarpsk658@gmail.com</p>
            </div>
            
            </div>
            <div className="icoL">
                <div className="icoL_icon">
                  
                <a href="mailto:selvakumarpsk658@gmail.com"><EmailIcon style={{width: "60px",
    height: "50px"}}/></a>
                
              </div>

                <div className="icoL_icon">
                  <a target="_blank" href="https://www.linkedin.com/in/selvakumar-p-409b07220/"><LinkedInIcon style={{width: "60px",
    height: "50px"}}/></a>
                
              </div>

                <div className="icoL_icon">
                  <a target="_blank" href="https://github.com/selva658"><GitHubIcon style={{width: "60px",
    height: "45px"}}/></a>
                
              </div>
            </div>
          </div>
          <div className="gif">
            <img src={"assets/email1.gif"} alt="" />
          </div>
          
</div>
      </div>
    </div>
  );
}
