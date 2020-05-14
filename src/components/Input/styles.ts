import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  hasError: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  height: 56px;
  width: 90%;
  border-radius: 10px;
  margin: 0 auto;
  margin-bottom: 15px;
  padding: 0 10px;

  border: 2px solid #232129;
  background-color: #232129;

  ${(props) =>
    props.hasError &&
    css`
      border-color: #c53030;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      border-color: #ff9000;
    `}

  transition: border 0.2s ease-in-out;

  input {
    width: 100%;
    padding: 15px;
    border: 0;
    background-color: transparent;
    color: #fafafc;
  }

  svg {
    color: #989898;

    ${(props) =>
      (props.isFocused || props.isFilled) &&
      css`
        color: #ff9000;
      `}
    transition: border 0.2s ease-in-out;
  }
`;

export const ErrorContainer = styled.div`
  svg {
    color: #c53030;

    transition: border 0.2s ease-in-out;
  }
`;
