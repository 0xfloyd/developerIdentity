import React from 'react'
import './about.scss';
import {ReactComponent as Abot} from './abot.svg';
const About = () => {
    return (
        <div className='aboutt' id='about' >
        <div>
                 <Abot className='aboutsvg' />
            
           
        </div>
        <div className='me br4' >
             <h2 className='text' >I'm Software Engineer who loves to solve real-world problems.
              <span role='img' aria-label="Smiley" >😀 </span>,
              Born with absolute dedication to computer science, since I was 13 and I'm keen on continuous learning and innovating, got engaged in a lot of CS topics and earned so much knowledge in different fields, self-studied everything on multiple educational platforms to develop a scientist mentality and willing to always learn as long as I'm breathing.
Worked with governmental ministries, non-profit organizations and reached out to hundreds of whom wishing to get going with coding in different ages, developed my own penetration testing tools, and sold around 150 copies of them for individuals and tech companies <span role='img' aria-label="sadtype">😅 </span>. I am committed 
                 to building something larger, and someone who puts aside personal gain for the well-being of the group. besides
                  that,  I also love to contribute to open source ;) In the end, 
                  I am on a journey to never stop learning <span role='img' aria-label="correct" >✔</span>. </h2>
        </div>
        

        </div>
    )
}

export default About;
