import styled from 'styled-components';

export const Input = styled.input`
  width: 30rem;
  padding: 1.5rem;
  margin: 2rem 0;
  border-radius: 1rem 0 0 1rem;
  border: none;
  font-size: inherit;
  color: #969696;
  font-family: inherit;

  :focus {
    outline: none;
  }

  @media (max-width: 700px) {
    width: 15rem;
    padding: 1rem;
    font-size: 1rem;
  }
`;

export const Button = styled.button`
  background: #000;
  padding: 1.6rem;
  border-radius: 0 1rem 1rem 0;
  border: none;

  :focus {
    outline: none;
  }

  :hover {
    background: rgba(0, 0, 0, 0.8);
  }

  :active {
    background: rgba(0, 0, 0, 0.6);
  }

  @media (max-width: 700px) {
    padding: 1.1rem;
  }
`;
