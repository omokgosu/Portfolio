import React , {useEffect, useRef}from 'react';
import '../styles/Project.css'

type projectTop = {
  projectOffsetTop: (newoffsetTop:number) => void;
}

export default function Project({projectOffsetTop}:projectTop) {

  const projectRef = useRef<HTMLDivElement>(null);
  
  useEffect(()=>{
    if(projectRef.current){
      projectOffsetTop(projectRef.current.offsetTop);
    }
  },[])

  return (
    <section ref={projectRef} className="Project">
      <h3>PROJECT</h3>
      <ul className="ProjectList">
        <li>
          <h4>Safe Road Club</h4>
          <span>2023.08 &#40; 사이드 프로젝트 &#41;</span>
          <div className="ProjectItem">
            <div className="ProjectImg">
              <img src={process.env.PUBLIC_URL+"/assets/images/project/SRC_1.png"} alt="SRC이미지" />
            </div>
            <div className="ProjectInfo">
              <ul className="ProjectText">
                <li>
                  <p><span className="ProjectTitle">Safe Road Club App의 홍보를 위한 웹 사이트</span>입니다. 안전운전을 하면 NFT 토큰을 지급한다는 발상이 상당히 흥미로웠고, 앱의 성공에 기여하고 싶었습니다.</p>
                </li>
                <li>
                  <p>PM님과 어떤 정보를 어떤 애니메이션으로 보여줄까 하는 기획부분에도 참여하며 협업과 소통의 중요성을 느끼고 <span className="ProjectBold">기획단계에 대한 이해가 높아진다는 것</span>에 의미가 있었습니다.</p>
                </li>
                <li>
                  <p>외주 디자이너님과 Figma로 소통하며 <span className="ProjectBold">Figma가 이루고자 하는 협업과 소통의 가치</span>에대한 중요성을 충분히 느끼고 동시에 모르고있던 Figma 의 다양한 기능도 알게되는 계기가 되었습니다.</p>
                </li>
                <li>
                  <p>UX UI에 대한 부분을 직접 고민하며 더 재미있는 웹 사이트를 만들고자 노력했고, 비록 성능문제로 프로젝트에 적용하진 못했지만 <span className="ProjectBold">three.js 를 경험</span>하며 3D 렌더링을 통한 더욱 흥미로운 웹 사이트가 곧 구현될 것이라는 생각이 들었습니다.</p>
                </li>
              </ul>
              <button type="button">자세히 보기</button>
              <ul className="ProjectSkill">
                <li>
                  <dl>
                    <dt>주요기능</dt>
                    <dd>메인 애니메이션, 앱 사용법, NFT 토큰 얻는 법, 로드맵, 팀</dd>
                  </dl>
                </li>
                <li>
                  <dl>
                    <dt>URL</dt>
                    <dd><a href="https://saferoadclub.app/" target="_blank" rel="noreferrer">SafeRoadClub</a></dd>
                  </dl>
                </li>
                <li>
                  <dl>
                    <dt>Frontend</dt>
                    <dd>React.js</dd>
                  </dl>
                </li>
                <li>
                  <dl>
                    <dt>Deployment</dt>
                    <dd>AWS</dd>
                  </dl>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li>
          <h4>Profile Site</h4>
          <span>2023.08 &#40; 개인 프로젝트 &#41;</span>
          <div className="ProjectItem">
            <div className="ProjectImg">
              <img src={process.env.PUBLIC_URL+"/assets/images/project/SRC_1.png"} alt="SRC이미지" />
            </div>
            <div className="ProjectInfo">
              <ul className="ProjectText">
                <li>
                  <p><span className="ProjectTitle">포트폴리오 목적으로 만든 웹사이트</span>입니다. SEO를 위해 Next.js로 만들어도 되었지만 <span className="ProjectBold">React.js 에서의 SEO를 공부</span> 해보고 싶어서 React.js 로 진행하였습니다.</p>
                </li>
                <li>
                  <p>간단한 함수들을 typeScript를 사용해보며 <span className="ProjectBold">코드에 타입을 명시하고 예측가능하게 만든다는것</span>이 어떤 것인지 이해하는 계기가 되었습니다.</p>
                </li>
              </ul>
              <button type="button">자세히 보기</button>
              <ul className="ProjectSkill">
                <li>
                  <dl>
                    <dt>주요기능</dt>
                    <dd>인적사항, 기술스택, Github 및 blog 링크, 프로젝트, 경력 등</dd>
                  </dl>
                </li>
                <li>
                  <dl>
                    <dt>GitHub</dt>
                    <dd><a href="https://github.com/omokgosu/Portfolio" target="_blank" rel="noreferrer">Portfolio.github</a></dd>
                  </dl>
                </li>
                <li>
                  <dl>
                    <dt>URL</dt>
                    <dd><a href="https://github.com/omokgosu/Portfolio" target="_blank" rel="noreferrer">Portfolio.com</a></dd>
                  </dl>
                </li>
                <li>
                  <dl>
                    <dt>Frontend</dt>
                    <dd>React.js</dd>
                  </dl>
                </li>
                <li>
                  <dl>
                    <dt>Deployment</dt>
                    <dd>github.io</dd>
                  </dl>
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
}