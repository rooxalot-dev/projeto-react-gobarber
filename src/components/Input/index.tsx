import React, { InputHTMLAttributes } from 'react';
import { IconType } from 'react-icons';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: IconType;
}

const Input: React.FC<InputProps> = (props) => {
  const { icon: Icon } = props;

  return (
    <Container>
      {Icon && <Icon />}
      <input {...props} />
    </Container>
  );
};

export default Input;
