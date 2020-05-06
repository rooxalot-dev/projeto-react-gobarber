import styled from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  height: 56px;
  width: 90%;
  border-radius: 10px;
  margin: 0 auto;
  margin-bottom: 15px;

  border: 2px solid ${(props) => (!props.isFocused ? '#232129' : '#ff9000')};
  background-color: #232129;

  transition: border 0.2s ease-in-out;

  input {
    width: 100%;
    padding: 15px;
    border: 0;
    background-color: transparent;
    color: #fafafc;
  }

  svg {
    color: ${(props) =>
      props.isFocused || props.isFilled ? '#ff9000' : '#989898'};
    margin-left: 10px;

    transition: border 0.2s ease-in-out;
  }
`;
