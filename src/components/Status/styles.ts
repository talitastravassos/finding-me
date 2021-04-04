import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  width: 80%;
  height: 10rem;
  border-radius: 1rem;
  background: white;
  margin: 1rem auto;
  box-shadow: 3px 4px 10px 0px rgb(68 68 68 / 60%);
  position: absolute;
  z-index: 10;
  top: 30%;
  right: 10%;

  .item {
    padding: 0 1rem;
    max-height: 4rem;
    margin: auto;
    min-width: 12rem;

    :not(:last-child) {
      border-right: 1px solid RGBA(150, 150, 150, 0.6);
    }

    span {
      text-transform: uppercase;
      color: #969696;
      font-size: 0.8rem;
      font-weight: 600;
    }

    p {
      font-weight: 600;
      font-size: 1.3rem;
      margin-top: 0.6rem;
    }
  }

  @media (max-width: 700px) {
    flex-direction: column;
    min-height: 17rem;
    text-align: center;
    padding: 1rem;
    right: 40px;

    .item {
      :not(:last-child) {
        border-right: none;
      }

      span {
        font-size: 0.7rem;
      }

      p {
        font-size: 1rem;
        margin-top: 0.4rem;
      }
    }
  }
`;
