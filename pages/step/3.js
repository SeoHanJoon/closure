import React from "react";
import Head from "next/head";
import styled from "styled-components";

import Nav from "../../components/nav";
import Title from "../../components/title";
import Content from "../../components/content";
import Code from "../../components/code";

const Article = styled.article`
  margin-bottom: 60px;
`;

/* 클로저를 체크하는 함수
 ** 내부에 배열을 생성한다.
 ** 그리고 for문을 통해 각 버튼을 클릭할 때 실행할 함수들을 저장해둔다.
 ** 버튼 클릭 시, 인자를 하나 받아 해당 인자와 매치되는 위치의 함수를 배열에서 꺼내 실행한다.
 */
function btnClick(key) {
  let arr = [];

  for (var i = 0; i < 3; i++) {
    arr.push(function() {
      return i;
    });
  }

  const func = arr[key];
  console.log(func());
}

const Home = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/static/favicon.ico" />
      </Head>

      <Nav />

      <section>
        <Article>
          <Title>클로저 응용</Title>
          <Code>
            <p>- 시작하기 전 : 변수 선언의 범위</p>
            <p>- Step1 : 스코프 체인</p>
            <p>- Step2 : 클로저</p>
            <p>- Step3 : 클로저 응용</p>
          </Code>
        </Article>

        <Article>
          <Title sub>클로저 응용</Title>
          <Content>
            <p>&#9996; 버튼 클릭할 때, 값이 이상하다?</p>
            <br />
            <p>
              1. 클릭을 통해 함수를 실행할 경우, 이 때 접근할 i 값은 이미
              for문을 완전히 끝낸 상태이기 때문에 같은 값이 나온다.
            </p>
            <p>
              2. 이 경우, i값을 props로 내려줄 수 있도록 함수를 한 번 더
              감싸주면 새로운 Scope가 생기기에 문제가 해결된다.
            </p>
            <p>
              3. 신기하게도 let을 사용하면 위의 2번과 같은 상황이 발생한다.{" "}
            </p>
            <p>
              <a href="https://es6console.com/" target="_blank">
                https://es6console.com/
              </a>
            </p>
          </Content>
          <button
            type="button"
            onClick={() => btnClick(0)}
            style={{ padding: "16px" }}
          >
            버튼 1번
          </button>
          <button
            type="button"
            onClick={() => btnClick(1)}
            style={{ padding: "16px" }}
          >
            버튼 2번
          </button>
          <button
            type="button"
            onClick={() => btnClick(2)}
            style={{ padding: "16px" }}
          >
            버튼 3번
          </button>
          <img
            src="/static/step3.png"
            alt="클로저"
            style={{ display: "block", width: "80%", margin: "40px auto 0" }}
          />
        </Article>
      </section>
    </div>
  );
};

export default Home;
