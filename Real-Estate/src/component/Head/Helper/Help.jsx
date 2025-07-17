import React from "react";
import "./Help.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import { motion } from "framer-motion";
function Help() {
  return (
    <section className="Help-wrapper">
      <div className="padding innerWidth flexCenter Help-container">
        <div className="contain">
          <div className="Help-title">
            <div className="circle"></div>
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 2,
                type: "ease-in",
              }}
            >
              <b style={{ color: "#82ff1f" }}>T</b>urning{" "}
              <b style={{ color: "#82ff1f" }}>S</b>paces <br />{" "}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <b style={{ color: "#82ff1f" }}>I</b>nto <br />
              &nbsp;&nbsp; <b style={{ color: " #82ff1f" }}>S</b>weet{" "}
              <b style={{ color: "#82ff1f" }}>H</b>omes
            </motion.h1>
          </div>
          <div className="flexColStart Description">
            <span>
              Explore properties to buy, rent, or sell with just a click.
              <br />
              Discover trusted agents, get expert help <br />
              and take the next step in your real estate journey — all in one
              place.
            </span>
            <div className="flexCenter search-bar">
              <HiLocationMarker color="#82ff1f" size={30}></HiLocationMarker>
              <input type="text" />
              <button className="button">Search</button>
            </div>
            <div className="flexCenter stat">
              <div className="flexColstart stat">
                <span>
                  <CountUp start={8000} end={9000} duration={10} />
                  <span>
                    <b>+</b>
                  </span>
                  &nbsp;
                </span>
                <span>
                  <b style={{ color: "#82ff1f" }}>P</b>remium Properties
                  &nbsp;&nbsp;
                  <b>1L+</b>
                  <b style={{ color: "#82ff1f" }}>H</b>appy Customers
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flexCenter Help-right">
          <div className="hanger"></div>
          <motion.div
            className="img-container"
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "ease-in",
            }}
          >
            <img src="./realbuilding.jpg" alt="main-img" />
            <div className="hanger2"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Help;
