import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
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

  svg {
    color: #989898;
    margin-left: 10px;
  }
`;
