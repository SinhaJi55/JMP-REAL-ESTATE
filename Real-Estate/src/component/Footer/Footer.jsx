import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <section className="f-wrapper">
        <div className="paddings innerWidth flexCenter F">

            <div className="flexColStart f-left">
                <img src="realpic.jpg" alt="logo"  width={150}/>
                <span className="secondaryText T">
                    Our Goal  is to help you by Getting your Dream Properties
                </span>
            </div>


            <div className="flexColStart f-right">
                <span className="primaryText Info ">Information</span>
                <span className='secondaryText'>Jamalpur, Bihar</span>
                <div className="flexCenter f-menu">
                    <span className='l1'>Property</span>
                    <span className='l2'>Services</span>
                    <span className='l3'>Product</span>
                    <span className='l4'>About Us</span>
                </div>
            </div>

            
        </div>
    </section>
  )
}

export default Footer
