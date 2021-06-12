 /* eslint-disable */ //-> 이거 에러 없애는 기능임

import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let posts = 'OH OH OH OH OH OH OH OH OH OH';
  let pic1='https://t1.daumcdn.net/cfile/tistory/996C744F5B0753B01F';


  // var[a,b] = [10, 100];
  let[title, change_title] = useState(['울산', '서울', '부산']);
  let[title2, change_title2] = useState('이건 머고?', '대전');
  let[good, change_good] = useState(0);

  function changefunc(){
    let newArray = [...title];
    newArray[0] = '대전';
    change_title( newArray );
  }
  return (
    <div>
      {/* 제목 */}
      <div className="black-nav">
        <h1> Dev blog </h1>
      </div>
      {/* 내용 */}
      <button onClick={ changefunc }>버튼</button>
      <div className="list">
        <h2> { title[0] } <span onClick={()=>{change_good(good + 1)}}> Good👍 </span> {good} </h2> {/* 타이틀 state 변수 설정 방법 */}
        <h4> 날짜 </h4>
        <p> 21 05 06 발행</p>
        <hr/>
      </div>

      <div className="list">
        <h2>{ title[1] }</h2> {/* 타이틀 state 변수 설정 방법 */}
        <h4> 날짜 </h4>
        <p> 21 05 06 발행</p>
        <hr/>
      </div>

      <div className="list">
        <h2>{ title[2] }</h2> {/* 타이틀 state 변수 설정 방법 */}
        <h4> 날짜 </h4>
        <p> 21 05 06 발행</p>
        <hr/>
      </div>
    </div>
  );
}

export default App;
