import styled from 'styled-components';
import bg from '../../images/pattern-bg.png';

export const Wrapper = styled.section`
  display: inline-block;
  background-image: url(${bg});
  background-size: 100% 100%;
  background-position: center;
  width: 100%;
  height: 40vh;
  text-align: center;

  h1 {
    color: white;
    font-size: 2rem;
    font-weight: 500;
    padding-top: 3rem;
  }
`;
