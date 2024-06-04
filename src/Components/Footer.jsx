import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

const Footer = () => {
  const date = new Date();
  let year = date.getFullYear();
  return (
    <footer>
      <h4>Copyright &copy; {year} | All Rights Reserved.</h4>
      <div className="footerLinks">
        <a href="https://github.com/kartiknarwal" target="_blank">
          <FaGithub />
        </a>
        <a href="https://instagram.com/narwal._kartik" target="_blank">
          <FaInstagram />
        </a>

        <a href="mailTo:kartiknarwal38@gmail.com" target="_blank">
          <GrMail />
        </a>
        <a href="https://www.linkedin.com/in/kartik-narwal-64206225b/" target="_blank">
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
