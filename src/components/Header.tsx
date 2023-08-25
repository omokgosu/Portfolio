import React, {useState} from 'react';

import '../styles/Header.css'

export default function Header() {

  const [ navOpen ,setNavOpen ] = useState<boolean>(false);

  return (
    <header className="Header">
      <div className="headerInner">
        <h1><a href="./index.html">양진성 포트폴리오</a></h1>
        <nav className={navOpen ? 'open' : ''}>
          <h2 className="hidden">네비게이션 영역</h2>
          <ul className="QuickList">
            <li>
              <a href="#About" >About</a>
            </li>
            <li>
              <a href="#Archiving">Archiving</a>
            </li>
            <li>
              <a href="#Project">Project</a>
            </li>
            <li>
              <a href="#Career" >Career</a>
            </li>
          </ul>
        </nav>
        <button type="button" className="navBtn" onClick={()=>setNavOpen(!navOpen)}><span className="hidden">모바일 네비게이션 버튼<span/></span></button>
      </div>
    </header>
  );
}