import React from 'react';
import { useState, useEffect } from 'react';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import image0 from './images/progress-level/0.png';
import profile from './images/edited.jpg';
import image1 from './images/progress-level/1.png';
import image2 from './images/progress-level/2.png';
import image3 from './images/progress-level/3.png';
import image4 from './images/progress-level/4.png';
import image5 from './images/progress-level/5.png';
import { BsSuitHeart } from 'react-icons/bs';
import { BiRightArrow } from 'react-icons/bi';
import Contact from './components/contactform';
import NavBar from './components/navbar';
import AboutMe from './components/about';
import Home from './components/home';
// import Cover from './images/Cover.png';
// import { AiFillLinkedin } from 'react-icons/ai';
// import { AiOutlineGithub } from 'react-icons/ai';




function App() {
  const [skills, setSkills] = useState([]);
  const [skillInfo, setSkillInfo] = useState([]);
  const [image, setImage] = useState([image0, image1, image2, image3, image4, image5]);

  useEffect(async () => {
    axios.get("http://localhost:5000")
      .then(resp => {
        console.log(resp, resp.data);
        setSkills(resp.data);
      })
      .catch(error => {
        console.log(error);
      })


  }, []);

  //TODO: add proper function to open drop down for each skill
  const informationDropDown = (skillName, index) => {
    console.log("yo you pressed the button", skillName, index);
    var x = document.getElementById(skillName);
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }

  };
const skillInfoDropDown =(section)=>{
  console.log(section);
  var x = document.getElementById(section);
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}
//TODO: Input the parameters into a list so they are all listed 
//TODO: add the descriptions to each skill
//TODO: Make website responsive
//TODO: Hide mongo password ( or change it)
//TODO: Deploy to the domain 
const splitInformation=(description)=>{

  let paragraph=description.split(".");

  for(let i=0;i<paragraph.length;i++){
      <li>{paragraph[i]}</li>
  }
  console.log(paragraph);
}



  return (

    <body>
      <NavBar />
      <Home/>
      <br></br>
      <br></br>
      <br></br>


      <AboutMe/>
      <div id="styledimg">

        <br></br>
        <br></br>
        <br></br>
        <h1>Skills</h1>
        <h2 id='skillType'>Frontend<BiRightArrow onClick={()=>skillInfoDropDown('frontend')} className='biRightArrow' color='#18a795'/></h2>
        <div id='frontend' style={{ display: 'none' }}>
        {skills.filter(skill => skill.category == 'Frontend').map((skill, index) =>  <div key={skill.id} className="row" id='skillsDiv'>
          <img src={skill.image} className='col' id='icon' />
          <div id="skillName"><p className='col'  >{skill.skillName} </p></div>
          <div className='col'><button id='skillButton' type='button' onClick={() => informationDropDown(skill.skillName, index)} > &gt; </button></div>
          <img src={image[skill.proficiencyLevel]} className='col' id='skillLevel' />
          <div id={skill.skillName} className='myDIV' style={{ display: 'none' }}>
            <p onClick={()=>splitInformation(skill.description)}>{skill.description}</p>
          </div>

        </div>)}
        </div>


        <h2 id='skillType'>Backend<BiRightArrow onClick={()=>skillInfoDropDown('backend')} className='biRightArrow' color='#18a795'/></h2>
        <div id='backend' style={{ display: 'none' }}>
        {skills.filter(skill => skill.category == 'Backend').map((skill, index) => <div key={skill.id} className="row" id='skillsDiv'>
          <img src={skill.image} className='col' id='icon' />
          <div id="skillName"><p className='col'  >{skill.skillName} </p></div>
          <div className='col'><button id='skillButton' type='button' onClick={() => informationDropDown(skill.skillName, index)} > &gt; </button></div>
          <img src={image[skill.proficiencyLevel]} className='col' id='skillLevel' height={30} width={30} />
          <div id={skill.skillName} className='myDIV' style={{ display: 'none' }}>
          </div>
        </div>)}
        </div>

        <h2 id='skillType'>Design<BiRightArrow onClick={()=>skillInfoDropDown('design')} className='biRightArrow' color='#18a795'/></h2>
        <div id='design' style={{ display: 'none' }}>
        {skills.filter(skill => skill.category == 'Design').map((skill, index) => <div key={skill.id} className="row" id='skillsDiv'>
          <img src={skill.image} className='col' id='icon' />
          <div id="skillName"><p className='col'  >{skill.skillName} </p></div>
          <div className='col'><button id='skillButton' type='button' onClick={() => informationDropDown(skill.skillName, index)} > &gt; </button></div>
          <img src={image[skill.proficiencyLevel]} className='col' id='skillLevel' height={30} width={30} />
          <div id={skill.skillName} className='myDIV' style={{ display: 'none' }}>
          </div>
        </div>)}
        </div>

        <h2 id='skillType'>Version Control<BiRightArrow onClick={()=>skillInfoDropDown('vcontrol')} className='biRightArrow' color='#18a795'/></h2>
        <div id='vcontrol' style={{ display: 'none' }}>
        {skills.filter(skill => skill.category == 'VersionControl').map((skill, index) => <div key={skill.id} className="row" id='skillsDiv'>
          <img src={skill.image} className='col' id='icon' />
          <div id="skillName"><p className='col'  >{skill.skillName} </p></div>
          <div className='col'><button id='skillButton' type='button' onClick={() => informationDropDown(skill.skillName, index)} > &gt; </button></div>
          <img src={image[skill.proficiencyLevel]} className='col' id='skillLevel' height={30} width={30} />
          <div id={skill.skillName} className='myDIV' style={{ display: 'none' }}>
          </div>
        </div>)}
        </div>
        <h1 id='contactMe'>
          Contact Me
        </h1>
        <Contact />

        <footer>
          {/* <p><a href="mailto:talebitarane@gmail.com">talebitarane@gmail.com</a></p> */}
          <p>&copy; Made by Tarane Talebi in 2022.<BsSuitHeart /></p>
        </footer>

      </div>
    </body>
  );
}


export default App;
