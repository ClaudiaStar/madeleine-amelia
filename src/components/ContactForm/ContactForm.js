import React from "react";
import classes from "./ContactForm.module.css";

const ContactForm = () => {
  return (
    <div className={classes.ContactForm}>
      <h2>
        Ask me any questions or let me know if you have something you need help
        with. I would love to hear from you!
      </h2>
      <div className={classes.FirstName}>
        <input
          type="text"
          name=""
          required="required"
          placeholder="First name"
        />
      </div>
      <div className={classes.LastName}>
        <input
          type="text"
          name=""
          required="required"
          placeholder="Last name"
        />
      </div>
      <div className={classes.Email}>
        <input type="email" name="" required="required" placeholder="Email" />
      </div>
      <div className={classes.Phone}>
        <input type="tel" name="" required="required" placeholder="Phone" />
      </div>
      <div className={classes.Message}>
        <textarea
          type="text"
          name=""
          required="required"
          placeholder="Type your message here &hearts;"
        />
      </div>
      <div className={classes.Submit}>
        <button type="submit">Submit</button>
      </div>
    </div>
  );
};

export default ContactForm;
