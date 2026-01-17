import React from 'react';
import "./projects.css";
import Reflow from './reflow';
import TinyLink from './tinylink';
import VideoLibrary from './videolibrary';


const Projects = () => {
  return (
    <section className="skills section" id='projects'>
        <h2 className='section_title'>Projects</h2>
        <span className='section_subtitle'></span>

        <div className='skills_containe container grid' id='skills_container'>
            <TinyLink />
            <VideoLibrary />
             <Reflow />
        </div>
    </section>
  )
}

export default Projects