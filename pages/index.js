import React from "react";
import Head from "next/head";
import styled from "styled-components";

import Nav from "../components/nav";
import Title from "../components/title";
import Content from "../components/content";
import Code from "../components/code";

const Article = styled.article`
  margin-bottom: 60px;
`;

/* 변수 영역을 체크하는 함수
 ** var는 Function Scope!
 ** 내부의 age 값을 var로 선언할 경우, Scope 밖에서도 age를 찾을 수 있다.
 **
 ** let은 Block Scope!
 ** 내부의 age 값을 let으로 선언할 경우, Scope 밖에서는 찾을 수 없다.
 */
function scopeCheck() {
  var name = "서한준";
  function Human() {
    {
      var age = 10;
    }

    console.log("name =", typeof name);
    if (typeof name !== "undefined") console.log(`name is ${name}`);

    console.log("age =", typeof age);
    if (typeof age !== "undefined") console.log(`age is ${age}`);
  }

  Human();
}

const Home = () => {
  // 변수 영역 체크
  scopeCheck();

  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/static/favicon.ico" />
      </Head>

      <Nav />

      <section>
        <Article>
          <Title>30분 순삭 Closure 공부</Title>
          <Code>
            <p>- 시작하기 전 : 변수 선언의 범위</p>
            <p>- Step1 : 스코프 체인</p>
            <p>- Step2 : 클로저</p>
            <p>- Step3 : 클로저 응용</p>
          </Code>
        </Article>

        <Article>
          <Title sub>변수 선언의 범위</Title>
          <Content>
            <p>&#9996; var와 let, const의 차이</p>
            <br />
            <p>1. var의 변수 범위는 function을 기준으로!</p>
            <p>2. let과 const의 변수 범위는 block을 기준으로!</p>
          </Content>
          <img
            src="/static/step0.png"
            alt="변수 선언의 범위"
            style={{ display: "block", width: "80%", margin: "0 auto" }}
          />
        </Article>
      </section>
    </div>
  );
};

export default Home;
