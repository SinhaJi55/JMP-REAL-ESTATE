import React from 'react'
import './Comm.css'
const Comm = () => {
  return (
    <section className="Comm-wrapper">
        <div className="paddings innerWidth Comm-container">
            <div className="flexColCenter inner-container">
                <span className='primaryText'>Get Started With Real Estate</span>
                <span className='secondaryText'>Subscribe and Get your Dreams Comes True
                <br />
                Chase Dreams
                </span>
                <button className="button">
                    <a  style={{color:'black'}} href="mailto:classicalsinharitik@gmail.com">Get Started</a>
                </button>
            </div>
        </div>
    </section>
  )
}

export default Comm
