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
          <article className="container">
            <h2 className="hidden">본문 콘텐츠 영역</h2>
            <Main />
            <About />
            <Skill />
            <Archiving />
            <Project />
            <Career />
          </article>
      </div>
  );
}