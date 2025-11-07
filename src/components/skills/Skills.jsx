import React from 'react';
import "./skills.css";
import Frontend from './Frontend';
import Backend from './Backend';
import Developertool from './Developertool';

const Skills = () => {
  return (
    <section className="skills section" id='skills'>
        <h2 className='section_title'>Skills</h2>
        <span className='section_subtitle'></span>

        <div className='skills_container container grid'>
            <Frontend/>
            <Backend/>
            <Developertool />
        </div>
    </section>
  )
}

export default Skills;