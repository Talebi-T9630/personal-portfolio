import React from 'react';
import { useState, useEffect } from 'react';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import image0 from './images/progress-level/0.png';
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





function App() {
  const [skills, setSkills] = useState([]);
  const [image] = useState([image0, image1, image2, image3, image4, image5]);

  useEffect(async () => {
    axios.get("https://personal-profile-cors.herokuapp.com/")
      .then(resp => {
        console.log(resp, resp.data);
        setSkills(resp.data);
      })
      .catch(error => {
        console.log(error);
      })


  }, []);

  
const skillInfoDropDown =(section)=>{
  console.log(section);
  var x = document.getElementById(section);
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}
//TODO: Hide mongo password ( or change it)
//TODO: Deploy to the domain 

  return (

    <body>
      <NavBar />
      <Home/>


      <AboutMe/>
      <div id="styledimg">
      
        <h1>Skills</h1>
        <h2 id='skillType'>Frontend<BiRightArrow onClick={()=>skillInfoDropDown('frontend')} className='biRightArrow' color='#18a795'/></h2>
        <div id='frontend' style={{ display: 'none' }}>
        {skills.filter(skill => skill.category == 'Frontend').map((skill, index) => <ul style={{textAlign:'center',display:'inline-block',marginLeft:'auto',marginRight:"auto"}}><li style={{display:'inline-block',verticalAlign:'top'}}key={skill.id} id='skillsli'>
          <img src={skill.image} id='icon' style={{maxWidth:'100%',height:'auto',  boxShadow: 'white'}} 
          />
          <img src={image[skill.proficiencyLevel]} className='col' id='skillLevel' />
          </li></ul> )}
        </div>


        <h2 id='skillType'>Backend<BiRightArrow onClick={()=>skillInfoDropDown('backend')} className='biRightArrow' color='#18a795'/></h2>
        <div id='backend' style={{ display: 'none' }}>
        {skills.filter(skill => skill.category == 'Backend').map((skill, index) => <ul style={{textAlign:'center',display:'inline-block',marginLeft:'auto',marginRight:"auto"}}><li style={{display:'inline-block',verticalAlign:'top'}}key={skill.id} id='skillsli'>
          <img src={skill.image} id='icon' style={{maxWidth:'100%',height:'auto'}} 
          />
          <img src={image[skill.proficiencyLevel]} className='col' id='skillLevel' />
          </li></ul> )}
        </div>

        <h2 id='skillType'>Design<BiRightArrow onClick={()=>skillInfoDropDown('design')} className='biRightArrow' color='#18a795'/></h2>
        <div id='design' style={{ display: 'none' }}>
        {skills.filter(skill => skill.category == 'Design').map((skill, index) => <ul style={{textAlign:'center',display:'inline-block',marginLeft:'auto',marginRight:"auto"}}><li style={{display:'inline-block',verticalAlign:'top'}}key={skill.id} id='skillsli'>
          <img src={skill.image} id='icon' style={{maxWidth:'100%',height:'auto'}} 
          />
          <img src={image[skill.proficiencyLevel]} className='col' id='skillLevel' />
          </li></ul> )}
        </div>

        <h2 id='skillType'>Version Control<BiRightArrow onClick={()=>skillInfoDropDown('vcontrol')} className='biRightArrow' color='#18a795'/></h2>
        <div id='vcontrol' style={{ display: 'none' }}>
        {skills.filter(skill => skill.category == 'VersionControl').map((skill, index) => <ul style={{textAlign:'center',display:'inline-block',marginLeft:'auto',marginRight:"auto"}}><li style={{display:'inline-block',verticalAlign:'top'}}key={skill.id} id='skillsli'>
          <img src={skill.image} id='icon' style={{maxWidth:'100%',height:'auto'}} 
          />
          <img src={image[skill.proficiencyLevel]} className='col' id='skillLevel' />
          </li></ul> )}
        </div>

        <div class='contact-section'>
          <h1 id='contactMe'>
            Contact Me
          </h1>
          <div class='contactform-container'>
            <Contact />
          </div>
        </div>
        </div>
        <footer class='footer-section'>
          {/* <p><a href="mailto:talebitarane@gmail.com">talebitarane@gmail.com</a></p> */}
          <p>&copy; Made by Tarane Talebi in 2022.<BsSuitHeart /></p>
        </footer>

      
    </body>
  );
}


export default App;
