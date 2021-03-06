import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-size: 1.125rem;
    color: #333;
     font-family: 'Rubik', sans-serif;
  }
`;

export const Container = styled.div`
  text-align: center;
  padding: 4rem;
`;
