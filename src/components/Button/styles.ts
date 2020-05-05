import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  display: block;
  width: 90%;
  height: 56px;
  border: 0;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 500;
  margin: 0 auto;
  background-color: #ff9000;
  color: #323138;

  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${shade(0.2, '#ff9000')};
  }
`;
