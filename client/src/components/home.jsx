import react from 'react';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiOutlineGithub } from 'react-icons/ai';
import Cover from '../images/Cover.png';



const Home = () => {
    return (
        <div>

            <div id='home'>
                <h1>Hi, I am Tarane.</h1>

                {/* <h3 style={{ display: 'block', marginLeft: 'auto', maginRight: 'auto' }}>
                Web Developer
            </h3> */}
                <h4>
                    A creative developer with new and reusable solutions.
                </h4>
            </div>
            <div id="sociallink">
                <ul style={{ listStyle: "none" }}>
                    <li>
                        <a href="https://www.linkedin.com/in/tarane-talebi-851155194/">
                            <AiFillLinkedin color='#18a795' />
                        </a></li>
                    <li>
                        <a href="https://github.com/Talebi-T9630">
                            <AiOutlineGithub color='#18a795' />
                        </a></li>
                </ul>
            </div>
        </div>


    );
}

export default Home;