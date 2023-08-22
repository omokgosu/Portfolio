import React from 'react';

import '../styles/Archiving.css'

export default function Archiving() {
  return (
    <section className="Archiving">
      <h3 className="hidden">Archiving</h3>
      <ul className="ArchivingList">
        <li>
          <a href="https://github.com/omokgosu" target='_blank' rel="noreferrer">
            <h4>
              <img src="/assets/icons/skill/version/github.svg" alt="git_hub" />
              <span>깃 허브</span>
            </h4>
            <ul>
              <li><p><span>코딩테스트의 학습기록을 위한 소스코드</span></p></li>
              <li><p><span>새로운 언어를 배우며 작성한 소스코드</span></p></li>
              <li><p><span>과거 진행한 프로젝트의 소스코드</span></p></li>
            </ul>
          </a>
        </li>
        <li>
          <a href="https://blog.naver.com/anfakt0606" target='_blank' rel="noreferrer">
            <h4>
              <img src="/assets/icons/skill/version/Naver.svg" alt="naver_blog" />
              <span>네이버 블로그</span>
            </h4>
            <ul>
              <li><p><span>공부한 것을 까먹지 않기 위해 기록하기</span></p></li>
              <li><p><span>웹 관련 지식들을 다른 사람과 공유하기</span></p></li>
              <li><p><span>내가 만났던 문제와 그것을 해결한 방법</span></p></li>
            </ul>
          </a>
        </li>
      </ul>
    </section>
  );
}