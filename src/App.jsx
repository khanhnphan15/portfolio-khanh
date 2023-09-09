import { useState } from 'react'
import './App.css'
import Sidenav from './components/Sidenav'
import Main from './components/Main'
import Work from './components/Work'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Contact from './components/Contact'

function App() {

  return (
    <div>
      <Sidenav />
      <Main />
      <Work />
      <Skills/>
      <Projects />
      <Resume />
      <Contact />
    </div>
  )
}

export default App
