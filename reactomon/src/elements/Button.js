import styled, { css } from "styled-components";

const Button = styled.button`
  color: ${(props) => props.theme.color};
  background: ${(props) => props.theme.background};
  font: ${(props) => props.theme.font};
  padding: 2px;
  &:hover {
    background: red;
  }
`;
export default Button;
