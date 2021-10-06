import React from 'react';
import {Link} from 'react-router-dom'
import './About.css'

export default function About() {
  return (
    <div className="about-wrapper">
      <div className='content-wrapper'>
        <div>
          <img id="about-photo" src={process.env.PUBLIC_URL + "/Images/me.jpg"} alt={"toddford"}/>
        </div>
        <div className='about-text'>
         <p id='todd'>Hi, I'm Todd. </p>
         <p> I'm currently a macro and quantitative trader at a proprietary trading firm in Chicago.
          For the last five years I've been applying knowledge of markets, the economy, and data analysis
          in an attempt to profit from the daily price flucuations across a variety of asset classes- equity index futures, 
          fixed income futures, and cash FX to name a few. In that time, increasing automation in the markets has 
          driven me to develop a broader technical skillset in order to maintain profitable trading strategies. 
          That process has sparked a passion for software development, which is why I'm now pursuing a transition into the 
          software industry. </p>
          <p>Through side projects, applications to trading, and with my background studying math and computer 
          science at Williams College, I believe I've gained the necessary experience, particularly with the MERN programming
          stack, to succeed as a software engineer. Look through my <Link className='portfolio-link' to='/portfolio'>portfolio</Link> to see what I can bring to the table!</p>
        </div>
      </div>
      
  </div>
  )
}