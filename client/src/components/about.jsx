import react from 'react';
import { BsFillCloudArrowDownFill } from 'react-icons/bs';
import aboutme from '../images/aboutme.jpeg';
import MyPDF from '../documents/resume.pdf';
// 
const AboutMe = () => {
    return (
        <div class='aboutme-section' id='About-Me'>
            <h1 id='about-title' class='section-title'>
                About Me
            </h1>

            <div id='aboutme-container'>
                <div id='aboutmepicture'>
                    <img src={aboutme}  />

                    {/* <img src={aboutme} height='400rem' style={{ marginLeft: '35rem', width: "300px", height: "337px", objectFit: "cover" }} /> */}
                </div>
                <div class='aboutmeinfo'>
                    <p>Up and coming Web Developer with professional experience and eagerness to learn more. Transforms visions into reality 
                        while finding the most effective solutions.</p>
                    <a href={MyPDF} download='Tarane-Talebi-Resume.pdf'> <button id='resume' >Download Resume <BsFillCloudArrowDownFill /></button></a>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;