import React from 'react';

import Skill from './Skill';
import '../styles/About.css'

export default function About() {
  
  return (
    <section className="About">
      <h2 className="hidden">About</h2>
      <img src={process.env.PUBLIC_URL+"/assets/images/about/introduce.jpg"} alt="양진성 사진" />
      <div className="AboutInfo">
        <section className="Information">
          <h3>INFORMATION</h3>
          <ul className="Information">
            <li>
              <img src={process.env.PUBLIC_URL+"/assets/icons/about/name.svg"} alt="이름 아이콘" />
              <dl>
                <dt>이름</dt>
                <dd>양진성</dd>
              </dl>
            </li>
            <li>
              <img src={process.env.PUBLIC_URL+"/assets/icons/about/date.svg"} alt="생년월일 아이콘" />
              <dl>
                <dt>생년월일</dt>
                <dd>96.10.14</dd>
              </dl>
            </li>
            <li>
              <img src={process.env.PUBLIC_URL+"/assets/icons/about/address.svg"} alt="주소 아이콘" />
              <dl>
                <dt>주소</dt>
                <dd>수원시 장안구</dd>
              </dl>
            </li>
            <li>
              <img src={process.env.PUBLIC_URL+"/assets/icons/about/phone.svg"} alt="전화 아이콘" />
              <dl>
                <dt>연락처</dt>
                <dd><a href="tel:010-7109-0654">010-7109-0654</a></dd>
              </dl>
            </li>
            <li>
              <img src={process.env.PUBLIC_URL+"/assets/icons/about/email.svg"} alt="메일 아이콘" />
              <dl>
                <dt>이메일</dt>
                <dd><a href="mailto:anfakt0606@naver.com">anfakt0606@naver.com</a></dd>
              </dl>
            </li>
            <li>
              <img src={process.env.PUBLIC_URL+"/assets/icons/about/school.svg"} alt="학교 아이콘" />
              <dl>
                <dt>학력</dt>
                <dd>백석대학교 &#40;연극영화과&#41;</dd>
              </dl>
            </li>
          </ul>
        </section>
        <Skill />
      </div>
    </section>
  );
}