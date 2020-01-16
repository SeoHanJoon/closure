import React from "react";
import styled from "styled-components";

const CodeWrap = styled.div`
  display: block;
  margin: 0 36px;
  padding: 16px;
  background-color: #f1f1f1;
  color: #333;

  & > p {
    margin: 10px 0;
  }
`;

const Code = ({ children }) => <CodeWrap>{children}</CodeWrap>;

export default Code;
