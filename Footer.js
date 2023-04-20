import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
       <a href="https://www.instagram.com/"> <InstagramIcon /> </a>
        <a href="https://twitter.com/settings/account?lang=en"><TwitterIcon /> </a>
        <a href="https://www.facebook.com/login/"><FacebookIcon /></a>
        <a href="https://www.linkedin.com/in/anuvarshini-s-891782232">
         <LinkedInIcon /></a>
      </div>
      <p> &copy; anuvarshini@gmail.com</p>
    </div>
  );
}

export default Footer;