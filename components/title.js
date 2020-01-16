import React from "react";
import styled from "styled-components";

const TitleWrap = styled.div`
  display: block;
  margin: 8px 36px;
  font-size: ${props => (props.sub ? "1.4rem" : "2rem")};
  color: #333;
`;

const Title = ({ sub = false, children }) => (
  <TitleWrap sub={sub}>{children}</TitleWrap>
);

export default Title;
