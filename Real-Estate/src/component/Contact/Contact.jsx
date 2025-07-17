import React from "react";
import "./Contact.css";
import {MdCall} from 'react-icons/md';
import { HiOutlineChatBubbleBottomCenter } from 'react-icons/hi2'
const Contact = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings flexCenter c-container">
        <div className=" flexColStart c-left">
          <span className="orangeText C">Our Contacts</span>
          <span className="primaryText D">Easy To Contact Us</span>
          <span className="secondaryText">Whether you're looking to buy, rent, or invest, we’re here to make your journey simple and stress-free. 
     Our expert team is always ready to assist you with tailored property solutions, verified listings, and local 
      insights to help you find the right place — faster and easier.</span>

      <div className="flexColStart contactModes">
        <div className="flexColStart row">
            <div className="flexColCenter mode">
                <div className="flexStart">
                    <div className="flexCenter icon">
                        <MdCall size={25}/>
                    </div>
           <div className="flexColStart detail">
            <span className="primaryText">Chat</span>
            <span className="secondaryText">91 + 776 545 6909</span>

           </div>
                </div>

                <div className="flexCenter button">Call Now</div>
            </div>
        </div>
      </div>
        </div>

        <div className="c-right">
          <div className="img-container">
            <img src="contact.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
