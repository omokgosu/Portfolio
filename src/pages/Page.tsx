import React from 'react';

import Header from '../components/Header';
import Main from '../components/Main';
import About from '../components/About';
import Skill from '../components/Skill';
import Archiving from '../components/Archiving';
import Project from '../components/Project';
import Career from '../components/Career';

export default function Page() {
  return (
      <div className="wrap">
          <Header />
          <div className="container">
              <Main />
              <About />
              <Skill />
              <Archiving />
              <Project />
              <Career />
          </div>
      </div>
  );
}