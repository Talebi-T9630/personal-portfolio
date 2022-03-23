import react from 'react';
import { BsFillCloudArrowDownFill } from 'react-icons/bs';
import aboutme from '../images/aboutme.jpeg';

const AboutMe = () => {
    return ( 
        <div>
            <h1 id='aboutme'>
                About Me
            </h1>
            <div id='aboutme-container'>
            <div id='aboutmepicture'>
                <img src={aboutme} height='400rem' style={{marginLeft:'20rem', width: "300px", height: "337px", objectFit: "cover"}} />
            </div>
            <div id='aboutmeinfo'>
            <p>Experienced Mobile/Web Developer with years of knowledge and experience. Delivers efficient and reusable solutions</p>
            <button id='resume'>Download Resume <BsFillCloudArrowDownFill/></button>
            </div>
            </div>
        </div>
     );
}
 
export default AboutMe;