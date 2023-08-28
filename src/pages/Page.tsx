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

  const [ aboutH , setAboutH ] = useState<number>(0);
  const [ archivingH , setArchivingH ] = useState<number>(0);
  const [ projectH , setProjectH ] = useState<number>(0);
  const [ careerH , setCareerH ] = useState<number>(0);

  const aboutOffsetTop = (newOffsetTop:number):void => {
    setAboutH(newOffsetTop);
  }
  const archivingOffsetTop = (newOffsetTop:number):void => {
    setArchivingH(newOffsetTop);
  }
  const projectOffsetTop = (newOffsetTop:number):void => {
    setProjectH(newOffsetTop);
  }
  const careerOffsetTop = (newOffsetTop:number):void => {
    setCareerH(newOffsetTop);
  }

  const scroll = (section:string):void => {

    let scrollTop:number = 0;
    
    if(section === 'about'){
      scrollTop = aboutH;
    }
    if(section === 'archiving'){
      scrollTop = archivingH;
    }
    if(section === 'project'){
      scrollTop = projectH;
    }
    if(section === 'career'){
      scrollTop = careerH;
    }
    
    window.innerWidth > 768 ? scrollTop -= 80 : scrollTop -= 55;
    window.scrollTo({
      top: scrollTop,
      behavior: 'smooth'
    })
  }

  return (
      <div className="wrap">
          <Header scroll={scroll}/>
          <article className="container">
            <h2 className="hidden">본문 콘텐츠 영역</h2>
            <Main />
            <About aboutOffsetTop={aboutOffsetTop}/>
            <Slide />
            <Archiving archivingOffsetTop={archivingOffsetTop}/>
            <Project projectOffsetTop={projectOffsetTop}/>
            <Career careerOffsetTop={careerOffsetTop}/>
          </article>
          <Footer />
      </div>
  );
}