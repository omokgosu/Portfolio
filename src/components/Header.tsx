import React, {useState} from 'react';

import '../styles/Header.css'

type scrollBtn = {
  scroll: (section:string) => void;
}

export default function Header({scroll}:scrollBtn) {

  const [ navOpen ,setNavOpen ] = useState<boolean>(false);

  return (
    <header className="Header">
      <div className="headerInner">
        <h1><a href="./index.html">양진성 포트폴리오</a></h1>
        <nav className={navOpen ? 'open' : ''}>
          <h2 className="hidden">네비게이션 영역</h2>
          <ul className="QuickList">
            <li>
              <button type="button"
                onClick={()=>scroll('about')}
              >
                About
              </button>
            </li>
            <li>
              <button type="button"
               onClick={()=>scroll('archiving')}
              >
                Archiving
              </button>
            </li>
            <li>
              <button type="button"
                onClick={()=>scroll('project')}
              >
                Project
              </button>
            </li>
            <li>
              <button type="button"
               onClick={()=>scroll('career')}
              >
                Career
              </button>
            </li>
          </ul>
        </nav>
        <button type="button" className="navBtn" onClick={()=>setNavOpen(!navOpen)}><span className="hidden">모바일 네비게이션 버튼<span/></span></button>
      </div>
    </header>
  );
}