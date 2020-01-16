import React from "react";
import styled from "styled-components";

const ContentWrap = styled.div`
  display: block;
  margin: 0 36px;
  padding: 16px;
  border-left: solid 2px #999;
  color: #333;

  & > p {
    margin: 10px 0;
  }
`;

const Content = ({ children }) => <ContentWrap>{children}</ContentWrap>;

export default Content;
