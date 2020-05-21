import styled, { keyframes } from 'styled-components';
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
`;

const fadeInFromLeft = keyframes`
  from {
    transform: translateX(-50px);
    opacity: 0;
  }
  to {
    transform: translateX(0px);
    opacity: 1;
  }
`;

export const AnimatedContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  animation: ${fadeInFromLeft} 1s;

  form {
    margin: 80px 0;
    width: 320px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
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

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const LoginBackground = styled.div`
  flex: 1;
  background: url(${signInBackground}) no-repeat center;
  background-size: cover;

  animation: ${fadeIn} 1s;

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
