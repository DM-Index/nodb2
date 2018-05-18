import React from "react";
import "./Footer.css";
// This function exports directly into the App Render Method. Everything on this page seems functional.
const Footer = props => {
  console.log(props);
  return <div className="footer">&copy; Nathan Hatzfeld 2018 </div>;
};
export default Footer;
