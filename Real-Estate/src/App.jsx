import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Head from './component/Head/Header'
import Header from './component/Head/Header'
import Help from './component/Head/Helper/Help'
import './App.css'
import Companies from './component/Companies/Companies'
import Residencies from './component/Recidensies/Residencies'
import Line from './Line'
import Value from './component/Value/value'
import Contact from './component/Contact/Contact'
import Comm from './component/StartComm/Comm'
import Footer from './component/Footer/Footer'
import Thankyou from './component/Thankyou'

function App() {
  

  return (
    
      <div className='App' >
        <div>
         
        <Header></Header>
        <Help></Help>
          <Line></Line>
        </div>
          <Companies ></Companies>
          
          <Residencies></Residencies>
          <Value></Value>
          <Contact></Contact>
          <Comm></Comm>
          <Footer></Footer>
          <Thankyou></Thankyou>
         </div>
         
  )
}

export default App
