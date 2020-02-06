import React from "react";
import classes from "./Footer.module.css";

import instagram from "../../assets/images/instagram.svg";
import facebook from "../../assets/images/facebook.svg";
import twitter from "../../assets/images/twitter.svg";

const Footer = () => {
  return (
    <div className={classes.Footer}>
      <h3>
        Follow me for some killer inspo - I hope I can move you to THRIVE.
        &hearts;
      </h3>
      <div className={classes.SocialIcons}>
        <img
          src={instagram}
          alt="instagram"
          className={classes.Instagram}
        ></img>
        <img src={facebook} alt="facebook" className={classes.Facebook}></img>
        <img src={twitter} alt="twitter" className={classes.Twitter}></img>
      </div>
    </div>
  );
};

export default Footer;
