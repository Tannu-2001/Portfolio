import { useState } from 'react'
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Contact from './components/contact/Contact';
import { Toaster } from 'react-hot-toast';
import Projects from './components/projects/Projects';

function App() {

  return (
    <>
      <Header />

      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Toaster />
        <Contact />
      </main>
    </>
  )
}

export default App
