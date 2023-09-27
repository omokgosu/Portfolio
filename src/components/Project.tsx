import React , {useEffect, useRef}from 'react';
import '../styles/Project.scss'

type projectTop = {
  projectOffsetTop: (newoffsetTop:number) => void;
}

export default function Project({projectOffsetTop}:projectTop) {

  const projectRef = useRef<HTMLDivElement>(null);
  const Load = ():void => {
    if(projectRef.current){
      projectOffsetTop(projectRef.current.offsetTop);
    }
  }

  useEffect(()=>{
    window.addEventListener('load', Load);
    window.addEventListener('resize', Load);

    return () => {
      window.removeEventListener('load', Load);
      window.removeEventListener('resize', Load);
    }
  },[])

  return (
    <section ref={projectRef} className="Project">
      <h3>PROJECT</h3>
      <ul className="ProjectList">
      <li>
          <h4>헬스하고 뭐먹지..</h4>
          <span>2023.09 &#40; 개인 프로젝트 &#41;</span>
          <div className="ProjectItem">
            <div className="ProjectImg">
              <img src={process.env.PUBLIC_URL+"/assets/images/project/Food/Food.png"} alt="SRC이미지" />
            </div>
            <div className="ProjectInfo">
              <ul className="ProjectText">
                <li>
                  <p><span className="ProjectTitle">영양성분과 이름에 따라 조리식품을 검색할 수 있는 웹사이트</span>입니다. 운동을 취미로 꾸준히 하게 되면서 맨날 아 오늘 뭐먹지.. 하고 고민했는데 여러가지 조리식품의 DB 가 있길래 만들어봤습니다.</p>
                </li>
                <li>
                  <p>Next.js 를 사용해보며<span className="ProjectBold"> SSR과 SEO를 편리하게 사용할 수 있었지만</span> CSR과 SSR을 적재적소에 활용하며 컴포넌트를 재사용하는게 아직도 많이 어렵습니다.</p>
                </li>
                <li>
                  <p>Recoil을 Project에 처음 사용해보고<span className="ProjectBold"> React스러운 문법으로 전역상태관리를 쉽게</span>할 수 있는 것이 굉장히 매력적이라고 느꼈습니다.</p>
                </li>
                <li>
                  <p><span className="ProjectBold">Vercel로 Next.js를 배포해보면서</span> Next.js 를 굉장히 편하게 build 할 수 있구나.. 하고 느꼈습니다.</p>
                </li>
                <li>
                  <p><span className="ProjectBold">Firebase 로 DB를 구축해보면서</span> 백엔드 서버를 쉽게 구축할 수 있다는데 저는 왜 어려운지 모르겠습니다.</p>
                </li>
              </ul>
              <ul className="ProjectSkill">
                <li>
                  <dl>
                    <dt>주요기능</dt>
                    <dd>탄수화물, 단백질, 지방 g 수와 식품명에 대한 검색기능, 조리법</dd>
                  </dl>
                </li>
                <li>
                  <dl>
                    <dt>GitHub</dt>
                    <dd><a href="https://github.com/omokgosu/NextHealth" target="_blank" rel="noreferrer">Food GPT.github</a></dd>
                  </dl>
                </li>
                <li>
                  <dl>
                    <dt>URL</dt>
                    <dd><a href="https://next-health-theta.vercel.app/" target="_blank" rel="noreferrer">Food GPT</a></dd>
                  </dl>
                </li>
                <li>
                  <dl>
                    <dt>Frontend</dt>
                    <dd>Next.js, Recoil</dd>
                  </dl>
                </li>
                <li>
                  <dl>
                    <dt>Backend</dt>
                    <dd>firebase</dd>
                  </dl>
                </li>
                <li>
                  <dl>
                    <dt>Deployment</dt>
                    <dd>vercel</dd>
                  </dl>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li>
          <h4>Safe Road Club</h4>
          <span>2023.08 &#40; 사이드 프로젝트 &#41;</span>
          <div className="ProjectItem">
            <div className="ProjectImg">
              <img src={process.env.PUBLIC_URL+"/assets/images/project/src/SRC_1.png"} alt="SRC이미지" />
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
              <ul className="ProjectSkill">
                <li>
                  <dl>
                    <dt>주요기능</dt>
                    <dd>메인 애니메이션, 앱 사용법, NFT 토큰 얻는 법, 로드맵, 팀</dd>
                  </dl>
                </li>
                <li>
                  <dl>
                      <dt>Github</dt>
                      <dd><a href="https://github.com/omokgosu/src-portfolio" target="_blank" rel="noreferrer">SafeRoadClub.github</a></dd>
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
              <img src={process.env.PUBLIC_URL+"/assets/images/project/profile/PROFILE_1.png"} alt="SRC이미지" />
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
                    <dd><a href="https://omokgosu.github.io/Portfolio/" target="_blank" rel="noreferrer">Portfolio.com</a></dd>
                  </dl>
                </li>
                <li>
                  <dl>
                    <dt>Frontend</dt>
                    <dd>React.js , scss</dd>
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