import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = (props) => {
  const { children } = props;

  return (
    <Container type="button" {...props}>
      {children}
    </Container>
  );
};

export default Button;
