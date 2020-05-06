import React, {
  InputHTMLAttributes,
  useState,
  useRef,
  useEffect,
  useCallback,
} from 'react';
import { useField } from '@unform/core';
import { IconType } from 'react-icons';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: IconType;
}

const Input: React.FC<InputProps> = (props) => {
  const { icon: Icon, name } = props;

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    if (inputRef.current && !!inputRef.current.value) {
      setIsFilled(true);
    } else {
      setIsFilled(false);
    }
  }, []);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  return (
    <Container isFocused={isFocused} isFilled={isFilled}>
      {Icon && <Icon />}
      <input
        onBlur={handleInputBlur}
        onFocus={handleInputFocus}
        ref={inputRef}
        {...props}
      />
    </Container>
  );
};

export default Input;
