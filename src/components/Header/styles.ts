import styled from 'styled-components';

export const Container = styled.div`
  padding: 25px 0;
  border-bottom: 1px solid #0050a0;

  h1 {
    margin: 0;
    padding: 0;
    font-size: 28px;
  }
  p {
    font-size: 16px;
    color: #66696f;
    margin-bottom: -5px;
  }
  img {
    display: block;
    margin-top: -30px;
  }
  @media (max-width: 480px) {
    img {
      display: block;
      margin: auto;
    }
    h1 {
      margin: 0;
      padding: 0;
      font-size: 28px;
      text-align: center;
    }
    p {
      font-size: 16px;
      color: #66696f;
      margin-bottom: -5px;
      text-align: center;
    }
  }
`;
