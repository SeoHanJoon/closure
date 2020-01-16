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
 ** 스코프 체인을 통해
 ** 외부 함수에 위치한 name을 내부 함수에서 호출하였다.
 **
 ** 내부 함수는 스코프 체인으로 연결된 외부 함수의 식별자에 접근이 가능하다.
 ** 이로 인해, 외부 함수의 실행이 끝나서 외부 함수가 소멸되더라도
 ** 종료된 외부 함수의 내부 함수를 통해 접근이 가능하다.
 */
function closureCheck() {
  function Human() {
    let name = "서한준";

    return {
      setter: function(text) {
        name = text;
      },
      getter: function() {
        return name;
      }
    };
  }

  let saram = Human();
  const { setter, getter } = saram;

  console.log(saram.getter());

  saram.setter("백두산");
  console.log(getter());

  saram = null;
  setter("부대찌개");
  console.log(getter());
}

const Home = () => {
  // 클로저 존재 체크
  closureCheck();
  console.dir(closureCheck);

  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/static/favicon.ico" />
      </Head>

      <Nav />

      <section>
        <Article>
          <Title>클로저</Title>
          <Code>
            <p>- 시작하기 전 : 변수 선언의 범위</p>
            <p>- Step1 : 스코프 체인</p>
            <p>- Step2 : 클로저</p>
            <p>- Step3 : 클로저 응용</p>
          </Code>
        </Article>

        <Article>
          <Title sub>클로저</Title>
          <Content>
            <p>&#9996; 간단하게 요약해보자</p>
            <br />
            <p>
              1. 종료된 외부 함수의 식별자를 내부 함수로 접근할 수 있는 특성을
              '클로저'라 한다.
            </p>
            <p>2. 클로저와 스코프 체인은 아주 밀접한 관계이다.</p>
          </Content>
          <img
            src="/static/step2.png"
            alt="클로저"
            style={{ display: "block", width: "80%", margin: "0 auto" }}
          />
        </Article>
      </section>
    </div>
  );
};

export default Home;
