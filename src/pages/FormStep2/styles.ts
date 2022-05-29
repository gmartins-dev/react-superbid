import styled from 'styled-components';

export const Container = styled.div`
  p {
    font-size: 16px;
    color: #66696f;
  }
  h1 {
    margin: 0;
    padding: 0;
    font-size: 26px;
  }
  hr {
    height: 1px;
    border: 0;
    background-color: #0050a0;
    margin: 30px 0;
  }
  label {
    font-size: 13px;
    input {
      display: block;
      margin-top: 7px;
      box-sizing: border-box;
      width: 100%;
      padding: 20px 10px;
      border: 2px solid #ec660b;
      border-radius: 10px;
      color: #131415;
      outline: 0;
      font-size: 15px;
      background-color: #d6eaf5;
    }
  }
  button {
    background-color: #ec660b;
    color: #ffffff;
    font-size: 14px;
    font-weight: bold;
    padding: 20px 40px;
    margin-top: -10px;
    margin-left: 80%;
    border: 0;
    border-radius: 30px;
    cursor: pointer;
  }
  .backButton {
    font-size: 16px;
    text-decoration: none;
    padding: 20px 40px;
    margin-left: 60%;
    margin-top: 30px;
    position: relative;
    left: 20px;
    top: 30px;
    color: #0050a0;
  }
  @media (max-width: 480px) {
    button {
      background-color: #ec660b;
      color: #ffffff;
      font-size: 14px;
      font-weight: bold;
      border: 0;
      border-radius: 30px;
      margin: auto;
      margin-left: 20px;
      margin-top: 10px;
      cursor: pointer;
    }
    .backButton {
      font-size: 16px;
      text-decoration: none;
      padding: 20px 40px;
      margin-left: 0;
      margin-top: -20px;
      position: relative;
      left: 20px;
      top: 0px;
      color: #0050a0;
    }
  }
`;
