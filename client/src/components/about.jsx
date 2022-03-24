import react from 'react';
import { BsFillCloudArrowDownFill } from 'react-icons/bs';
import aboutme from '../images/aboutme.jpeg';
import MyPDF from '../documents/resume.pdf';
// 
const AboutMe = () => {
    return (
        <div>
            <h1 id='aboutme'>
                About Me
            </h1>

            <div id='aboutme-container'>
                <div id='aboutmepicture'>
                <img src={aboutme}  />

                    {/* <img src={aboutme} height='400rem' style={{ marginLeft: '35rem', width: "300px", height: "337px", objectFit: "cover" }} /> */}
                </div>
                <div id='aboutmeinfo'>
                    <p>Experienced Web Developer with experience and eagerness to learn more. Takes visions and turns them reality.</p>
                    <a href={MyPDF} download='resume.pdf'> <button id='resume' >Download Resume <BsFillCloudArrowDownFill /></button></a>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;