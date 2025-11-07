import React from 'react';
import "./projects.css";
import VideoLibrary from './videolibrary';
import ShoppingOnline from './shoppingonline';
import ToDoList from './todo';


const Projects = () => {
  return (
    <section className="skills section" id='projects'>
        <h2 className='section_title'>Projects</h2>
        <span className='section_subtitle'></span>

        <div className='skills_containe container grid' id='skills_container'>
            <VideoLibrary/>
            <ShoppingOnline />
            <ToDoList/>
        </div>
    </section>
  )
}

export default Projects