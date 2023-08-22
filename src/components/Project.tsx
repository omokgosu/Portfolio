import React from 'react';
import '../styles/Project.css'

export default function Project() {
  return (
    <section className="Project">
      <h3>PROJECT</h3>
      <ul className="ProjectList">
        <li>
          <h4>Safe Road Club</h4>
          <span>2023.08 &#40; 사이드 프로젝트 &#41;</span>
          <div className="ProjectItem">
            <div className="ProjectImg">
              <img src="/assets/images/project/SRC_1.png" alt="SRC이미지" />
            </div>
            <div className="ProjectInfo">
              <ul className="ProjectText">
                <li>
                  <p><span className="ProjectBold">Safe Road Club App의 홍보를 위한 웹 사이트</span>입니다. 안전운전을 하면 NFT 토큰을 지급한다는 발상이 상당히 흥미로웠고, 앱의 성공에 기여하고 싶었습니다.</p>
                </li>
                <li>
                  <p>PM님과 어떤 정보를 어떤 애니메이션으로 보여줄까 하는 기획부분에도 참여하며 협업과 소통의 중요성을 느끼고 기획단계에 대한 이해가 높아진다는 것에 의미가 있었습니다.</p>
                </li>
                <li>
                  <p>외주 디자이너님과 Figma로 소통하며 Figma가 전하고자 하는 협업과 소통의 가치에대한 중요성을 충분히 느끼고 동시에 모르고있던 Figma 의 다양한 기능도 알게되는 계기가 되었습니다.</p>
                </li>
                <li>
                  <p>UX UI에 대한 부분을 직접 고민하며 더 재미있는 웹 사이트를 만들고자 노력했고, 비록 성능문제로 프로젝트에 적용하진 못했지만 three.js 를 경험하며 3D 렌더링을 통한 더욱 흥미로운 웹 사이트가 곧 구현될 것이라는 생각이 들었습니다.</p>
                </li>
                <li>
                  <p>Next.js 를 사용하기 보다는 React.js로 SEO 최적화를 충분히 경험해보고자 하는 생각에 React에서의 SEO 최적화를 경험해보는 가치있는 시간이었습니다.</p>
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
      </ul>
    </section>
  );
}