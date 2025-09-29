import React from 'react';
import { personalInfo } from './data/personal';
import { education } from './data/education';
import { experience } from './data/experience';
import { projects } from './data/projects';
import { skills } from './data/skills';
import Personal from './components/sections/Personal';
import Education from './components/sections/Education';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Footer from './components/layout/Footer';
import './App.css';

function App() {
  return (
    <div className="min-h-screen">
      {/* Personal Section */}
      <Personal personalInfo={personalInfo} />
      
      {/* Education Section */}
      <Education education={education} />
      
      {/* Experience Section */}
      <Experience experience={experience} />
      
      {/* Projects Section */}
      <Projects projects={projects} />
      
      {/* Skills Section */}
      <Skills skills={skills} />
      
      {/* Footer */}
      <Footer personalInfo={personalInfo} />
    </div>
  );
}

export default App;