import React from 'react';

export default function Archiving() {
  return (
    <section className="Archiving">
      <h3>Archiving</h3>
      <ul className="ArchivingList">
        <li>
          <h4>
            <img src="/assets/icons/skill/version/github.svg" alt="git hub" />
            <span>git hub</span>
          </h4>
          <ul>
            <li><p>코딩테스트를 학습기록을 위한 소스코드</p></li>
            <li><p>새로운 언어를 배우며 작성한 소스코드</p></li>
            <li><p>과거 진행한 프로젝트의 소스코드</p></li>
          </ul>
        </li>
        <li>
          <h4>
            <img src="/assets/icons/skill/version/Naver.svg" alt="naver blog" />
            <span>Naver blog</span>
          </h4>
          <ul>
            <li><p>공부한 것을 까먹지 않기 위해 기록하기</p></li>
            <li><p>웹 관련 지식들을 다른 사람과 공유하기</p></li>
            <li><p>내가 만났던 문제와 그것을 해결한 방법</p></li>
          </ul>
        </li>
      </ul>
    </section>
  );
}