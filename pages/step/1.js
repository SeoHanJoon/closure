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

/* 스코프 체인을 체크하는 함수
 ** 첫번째 함수 내에 두번째 함수가 선언되어있을 경우,
 ** 첫번째 함수를 '외부 함수', 두번째 함수를 '내부 함수'라고 지칭한다.
 **
 ** 내부 함수에서 변수를 필요로 할 때, 스코프 단위로 찾는다.
 **
 ** 1. 내부 함수에서 name을 찾는다.
 ** 2. 어? 없네?
 ** 3. 그럼 내 부모 스코프인 외부 함수에서 name을 찾아보자.
 ** 4. 아! 있다!
 ** 5. 호출 성공
 **
 ** 자신이 필요로 하는 '식별자'를 소속된 스코프 영역이 아닌,
 ** 밖으로 찾으러 가는 과정을 '스코프 체인'이라고 한다.
 */
function scopeChainCheck() {
  function Human() {
    const name = "서한준";

    return function() {
      const name = "백두산";
      return name;
    };
  }

  const human = Human();
  const humanName = human();
  console.log(humanName);
}

const Home = () => {
  // 스코프 체인 체크
  scopeChainCheck();

  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/static/favicon.ico" />
      </Head>

      <Nav />

      <section>
        <Article>
          <Title>스코프 체인</Title>
          <Code>
            <p>- 시작하기 전 : 변수 선언의 범위</p>
            <p>- Step1 : 스코프 체인</p>
            <p>- Step2 : 클로저</p>
            <p>- Step3 : 클로저 응용</p>
          </Code>
        </Article>

        <Article>
          <Title sub>스코프 체인</Title>
          <Content>
            <p>&#9996; 간단하게 요약해보자</p>
            <br />
            <p>
              1. 스코프 체인은 식별자를 찾는 일련의 과정을 뜻하며, 식별자는
              변수, 함수 등을 말한다. ( 객체 내부를 탐색하는 '프로토타입
              체인'이라는 것도 있다 ){" "}
            </p>
            <p>
              2. '찾았다 / 못찾았다'라는 결과가 아닌, 찾는 과정을 뜻하므로
              오해하지 말자
            </p>
          </Content>
          <img
            src="/static/step1.png"
            alt="스코프 체인"
            style={{
              display: "block",
              width: "80%",
              margin: "0 auto"
            }}
          />
        </Article>
      </section>
    </div>
  );
};

export default Home;
