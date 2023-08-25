import React, {useState, useEffect, useRef} from 'react';

import Header from '../components/Header';
import Main from '../components/Main';
import About from '../components/About';
import Slide from '../components/Slide';
import Archiving from '../components/Archiving';
import Project from '../components/Project';
import Career from '../components/Career';
import Footer from '../components/Footer';

export default function Page() {

  const aboutRef = useRef(null);

  return (
      <div className="wrap">
          <Header />
          <article className="container">
            <h2 className="hidden">본문 콘텐츠 영역</h2>
            <Main />
            <About />
            <Slide />
            <Archiving />
            <Project />
            <Career />
          </article>
          <Footer />
      </div>
  );
}