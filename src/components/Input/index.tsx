import React, {
  InputHTMLAttributes,
  useState,
  useRef,
  useEffect,
  useCallback,
} from 'react';
import { useField } from '@unform/core';
import { IconType } from 'react-icons';
import { FiAlertCircle } from 'react-icons/fi';
import ReactTooltip from 'react-tooltip';

import { Container, ErrorContainer } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: IconType;
}

const Input: React.FC<InputProps> = (props) => {
  const { icon: Icon, name } = props;

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, error, registerField } = useField(name);

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
    <Container isFocused={isFocused} isFilled={isFilled} hasError={!!error}>
      {Icon && <Icon />}
      <input
        onBlur={handleInputBlur}
        onFocus={handleInputFocus}
        ref={inputRef}
        {...props}
      />
      {error && (
        <ErrorContainer>
          <FiAlertCircle data-tip={error} />
          <ReactTooltip backgroundColor="#c53030" />
        </ErrorContainer>
      )}
    </Container>
  );
};

export default Input;
