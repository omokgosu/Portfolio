import React, {useState} from 'react';

import '../styles/Header.css'

export default function Header() {
  
  return (
    <header className="Header">
      <div className="headerInner">
        <h1><a href="./index.html">양진성 포트폴리오 로고</a></h1>
        <nav>
          <h2 className="hidden">네비게이션 영역</h2>
          <ul className="QuickList">
            <li>
              About
            </li>
            <li>
              Skills
            </li>
            <li>
              Archiving
            </li>
            <li>
              Projects
            </li>
            <li>
              Career
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}