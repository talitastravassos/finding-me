import styled from 'styled-components';
import bg from '../../assets/pattern-bg.png';

export const Wrapper = styled.header`
  display: inline-block;
  background-image: url(${bg});
  background-size: 100% 100%;
  background-position: center;
  width: 100%;
  height: 40vh;
  text-align: center;
  z-index: 1;

  h1 {
    color: white;
    font-size: 2rem;
    font-weight: 500;
    padding-top: 3rem;
  }
`;
