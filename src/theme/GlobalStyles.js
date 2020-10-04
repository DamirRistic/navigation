import styled, { createGlobalStyle } from "styled-components";
import Avenir from "../assets/fonts/Avenir-Medium.ttf";

export default createGlobalStyle`
  @font-face {
    font-family: 'Avenir';
    src: url(${Avenir});
    font-display: swap;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Avenir';
  }

  body{
    background-color: ${({ theme }) => theme.color.white};
  }

  h1{
    font-size: ${({ theme }) => theme.size.large};
    color: ${({ theme }) => theme.color.lightAccent};
    font-weight: 500;
    letter-spacing: 5px;
    line-height: 33px;
  }

  li{
    list-style: none;
  }

  a{
    text-decoration: none;
  }
`;

export const Container = styled.div`
  height: 948px;
  width: 463px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;

  @media screen and (max-width: 500px) {
    top: 0;
    left: 0;
    transform: translate(0, 0);
  }
`;
