import styled, { css } from 'styled-components';

interface ContainerProps {
  type: 'info' | 'success' | 'error';
}

const ToastTypeStyles = {
  info: css`
    background: #ebf8ff;
    color: #3172b7;
  `,

  success: css`
    background: #e6fffa;
    color: #26655a;
  `,

  error: css`
    background: #fddede;
    color: #c53030;
  `,
};

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 350px;
  padding: 10px 15px;
  margin-bottom: 15px;
  border-radius: 4px;
  ${(props) => ToastTypeStyles[props.type]}

  transition: transform 0.2s ease;

  &:hover {
    transform: translateX(-3px) translateY(-3px);
  }

  > svg {
    margin-right: 15px;
  }

  div {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    strong {
      font-weight: 700;
      margin-bottom: 4px;
    }

    span {
      opacity: 0.8;
      font-size: 14px;
    }
  }

  button {
    margin-left: 15px;
    border: 0;
    background: transparent;
    ${(props) => ToastTypeStyles[props.type]};
  }
`;
