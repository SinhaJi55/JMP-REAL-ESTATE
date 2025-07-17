import React, { useState } from 'react'
import {Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel, AccordionItemState} from 'react-accessible-accordion'
import 'react-accessible-accordion/dist/fancy-example.css';
import { MdOutlineArrowDropDown } from 'react-icons/md';
import './Value.css';
import data from "./accordion.jsx";

const Value = () => {
    const[className,setClassName]=useState(null)
  return (
    <section className='V-wraper'>

        <div className="paddings innerWidth flexCenter V-container">
            <div className="v-left">
                <div className="img-container">
                    <img src="r1.png" alt="" />
                </div>
            </div>

            <div className="flexColStart v-right">
                <span className='orangeText' style={{color:"#82ff1f"}}>Our Value</span>
                <span className='primaryText' style={{color:"black"}}>Value We Give To You</span>
                <span  className='secondaryText'>Find Right Property Within Minutes With 100% Authenticity <br />
                We Give You Sweet Homes!</span>
                <Accordion className="accordion"allowMultipleExpanded={false} preExpanded={[0]}>
                  {
                    data.map((item,i)=>{
                        
                        return(
                            <AccordionItem className={`accordionItem ${className}`} key={i} uuid={i}>
                              <AccordionItemHeading>
                                <AccordionItemButton className='accordionButton flexCenter'>

                                <AccordionItemState>
                                       {({expanded})=>expanded?setClassName("expanded"):setClassName("collapsed")}
                                </AccordionItemState>






                                <div className="flexCenter icon">
                                    {item.icon}
                                </div>
                                <span className='primaryText'>{item.heading}</span>
                                <div className="flexCenter icon">
                                    <MdOutlineArrowDropDown size={20}></MdOutlineArrowDropDown>
                                </div>
                              </AccordionItemButton>
                              </AccordionItemHeading>
                              <AccordionItemPanel>
                                <p className="secondaryText">{item.detail}</p>
                              </AccordionItemPanel>
                            </AccordionItem>
                             
                        );
                    })
                  }
                </Accordion>
            </div>
        </div>
    </section>
  )
}

export default Value
