import React, {useEffect, useRef} from 'react';

import '../styles/Career.css'

type careerTop = {
  careerOffsetTop: (newOffsetTop:number) => void;
}

export default function Career({careerOffsetTop}:careerTop) {

  const careerRef = useRef<HTMLDivElement>(null);
  
  useEffect(()=>{
    const Load = ():void => {
      if(careerRef.current){
        careerOffsetTop(careerRef.current.offsetTop);
      }
    }

    window.addEventListener('load', Load);

    return () => {
      window.removeEventListener('load', Load);
    }
  },[])

  return (
    <section ref={careerRef} className="Career">
      <h3>Carrer</h3>
      <div className="CareerInner">
        <div className="CareerImg">
          <img src={process.env.PUBLIC_URL+'/assets/images/career/PNC_LOGO.png'} alt="피앤씨스타 로고" />
        </div>
        <div className="CareerList">
          <h4>&#40; 주 &#41; 피앤씨스타</h4>
          <span className="CareerDate">2023.02 ~ 2023.06	&#47; 응용 소프트웨어 개발 및 공급업</span>
          <p>솔루션 개발의 <span className="CareerBold">Figma 와 AdobePhotoShop을 활용한 화면디자인 담당</span> 및 <span className="CareerBold">React.js 기반의 퍼블리싱</span>을 담당했습니다.</p>
          <ul className="CareerInfo">
            <li>
              <h5>건강보험 심사 평가원 OCR 솔루션</h5>
              <span>2023.02 ~ 2023.03</span>
              <ul className="CareerSet">
                <li>
                  <p>화면 전체 디자인 및 퍼블리싱 담당</p>  
                </li>
                <li>
                  <p>고객 편의를 위한 OCR 데이터 시각화 및 수정기능</p>  
                </li> 
                <li>
                  <p>공지 및 오류 신고를 위한 게시판 기능 &#40; toast UI &#41;</p>  
                </li>
                <li>
                  <p>오류신고 건수 집계 및 차트 시각화 &#40; Rechart.js &#41;</p>  
                </li>
                <li>
                  <p>FileReader API 를 활용한 PDF 편집기능</p>  
                </li>
                <li>
                  <p>통일되어 있지 않은 style 리팩토링 &#40; css 변수화 및 css로 통일작업 &#41;</p>  
                </li>  
              </ul>
            </li>
            <li>
              <h5>회사 자체 문서분류 솔루션</h5>
              <span>2023.03 ~ 2023.06</span>
              <ul className="CareerSet">
                <li>
                  <p>화면 전체 기획 참여 및 디자인 및 퍼블리싱 담당</p>  
                </li>
                <li>
                  <p>문서 타이틀 추출 페이지 퍼블리싱</p>  
                </li> 
                <li>
                  <p>문서 분류 페이지 퍼블리싱</p>  
                </li>  
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}