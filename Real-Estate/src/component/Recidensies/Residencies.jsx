import React from "react";

import "./Residencies.css";

const Residencies = () => {
  return (
    <section className="r-wrapper full">
      <div className="paddings innerWidth r-container">
        <div className="r-head flexColStart">
          <span className="GOLDEN">Best Choices</span>
          <span className="popular" style={{color:"#82ff1f"}}>Popular Residencies</span>
        </div>
         <div className="slide">
           <div className="child1" ></div>
           <div className="child2"></div>
           <div className="child3"></div>
           <div className="child4"></div>
           <div className="child5"></div>
           <div className="child6"></div>
           
         </div>
      </div>
    </section>
  );
};

export default Residencies;
