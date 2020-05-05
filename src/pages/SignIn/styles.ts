import styled from 'styled-components';
import { shade } from 'polished';

import signInBackground from '../../assets/sign-in-background.png';

export const Container = styled.div`
  display: flex;
  height: 100vh;
`;

export const LoginContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 768px;

  @media (max-width: 1024px) {
    max-width: 100%;
    background: rgba(0, 0, 0, 0.6);
  }

  form {
    margin: 80px 0;
    width: 320px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    div.input {
      height: 56px;
      width: 90%;
      border-radius: 10px;
      border: 2px solid #232129;
      margin: 0 auto;
      margin-bottom: 15px;
      background-color: #232129;

      input {
        width: 100%;
        padding: 15px;
        border: 0;
        background-color: transparent;
        color: #fafafc;
      }
    }

    button {
      display: block;
      width: 90%;
      height: 56px;
      border: 0;
      border-radius: 8px;
      font-size: 18px;
      font-weight: 500;
      margin: 0 auto;
      background-color: #ff9000;

      transition: background-color 0.2s ease-in-out;

      &:hover {
        background-color: ${shade(0.2, '#ff9000')};
      }
    }

    > a {
      display: block;
      margin-top: 20px;
      text-decoration: none;
      color: #fafafc;

      transition: color 0.2s ease-in-out;

      &:hover {
        color: ${shade(0.2, '#fafafc')};
      }
    }
  }

  > a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #ff9000;

    transition: color 0.2s ease-in-out;

    &:hover {
      color: ${shade(0.2, '#ff9000')};
    }

    svg {
      margin-right: 10px;
    }
  }
`;

export const LoginBackground = styled.div`
  flex: 1;
  background: url(${signInBackground}) no-repeat center;
  background-size: cover;

  @media (max-width: 1024px) {
    max-width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    flex: none;
  }
`;
