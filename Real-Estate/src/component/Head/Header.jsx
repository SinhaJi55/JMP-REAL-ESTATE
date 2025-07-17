
import React, { useState } from 'react';
import './Head.css' ;
import { BiMenuAltRight } from 'react-icons/bi';
import OutsideClickHandler from 'react-outside-click-handler';
function Header() {
  const[menuopened, setMenu]=useState(false);
  const getMenu=(menuopened)=>{
     if(document.documentElement.clientWidth<=800){
      return {right:!menuopened && "-100%"}
     }
  }
  return (
   <section className="head">
    <div className="headcontainer flexCenter paddings innerWidth h-container">
        <img src="./realpic.jpg" alt="logo"  width={100}/>
<OutsideClickHandler
  onOutsideClick={()=>{
            setMenu(false);
  }}>
        <div className="headmenu flexCenter " style={getMenu(menuopened)}>
            <a  className="l1"href="" >Buy</a>
            <a className='l2' href="" >Rent</a>
            <a  className='l3'href="" >Sell</a>
            <a  className='l4'href="" >Find an Agent</a>
            <a  className='l5'href="" >Help</a>
            <button className='button'  >Contact</button>
            
        </div>
</OutsideClickHandler>
        <div className="menu-icon" onClick={()=>setMenu((prev)=>!prev)}>
          <BiMenuAltRight size={30}/>
        </div>
    </div>
   </section>
  );
}

export default Header;
