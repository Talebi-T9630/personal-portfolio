import React from 'react';
import { useState, useEffect } from 'react';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';


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

  return (
    <div>

      {/* <table class="table">
        {skills.map(skill => <tr key={skill.id} className="row">
          <td className='col'><img src={skill.image} /></td>
          <td className='col'>{skill.skillName}</td>
          <td className='col'>{skill.proficiencyLevel}</td>
          <td className='col'>{skill.typeOfSkill}</td>
        </tr>)}
      </table> */}
        {skills.map(skill => <div key={skill.id} className="row">
          <img src={skill.image} className='col' id='icon' />
         <div id="skillName"><p className='col' >{skill.skillName}</p></div>
          <p className='col' id='skillLevel'>{skill.proficiencyLevel}</p>
          <p className='col'id='skillType'>{skill.typeOfSkill}</p>
        </div>)}



    </div>
  );
}

export default App;
