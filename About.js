import React from "react";
import BannerImage from "../assets/gray.jpg";
import "../styles/About.css";
function About() {
  return (
    
      <div className="about" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="aboutBottom">
        <h2> ABOUT ME</h2>
        <p>
        Hi, I'm ANUVARSHINI and I'm excited to share my portfolio with you! I'm an UG student at Sri Krishna College Of Engineering & Technology, with a passion for a Civil Service.
Throughout my academic career, I've had the opportunity to develop my skills in Programming,Communication , and I've gained valuable experience through my Research and Projects. 
I believe that these experiences have prepared me to take on challenges in my future.
I'm confident that I'll be able to make a positive contribution wherever I go.

        </p>
        <p>
        In the future,I hope to be a Civil Servant, and I'm excited to 
        see where my education and experiences will take me. 
        I'm always open to new opportunities and challenges, and I'm eager to 
        see what the world has in store.
        In my free time, I enjoy playing outdoor games . I believe that it's important to have a balance between work and play, and I find that help me to relax and recharge.


        Thank you for taking the time to view my portfolio...
        </p>
        <p>
        If you have any questions or would like to connect,
         please don't hesitate to reach out!
         MOVE TO CONTACT PAGE!!
        </p>
      </div>
    </div>
  );
}

export default About;