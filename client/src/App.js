import React from 'react';
import { useState, useEffect } from 'react';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
// import back from './images/background.jps';


function App() {
  const [skills, setSkills] = useState([]);


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

  const informationDropDown=()=>{
    console.log("yo you pressed the button");

  };

  return (
    <body>
    <div id="styledimg">

    
      <br></br>
      <br></br>
      <br></br>


        {skills.map(skill => <div key={skill.id} className="row" id='skillsDiv'>
          <img src={skill.image} className='col' id='icon' />
         <div id="skillName"><p className='col'  >{skill.skillName} </p></div>
         <button id='skillButton' type='button' onClick={()=>informationDropDown()} className='col'>></button>
          <p className='col' id='skillLevel'>{skill.proficiencyLevel}</p>
        </div>)}

    </div>
    </body>
  );
}

export default App;
