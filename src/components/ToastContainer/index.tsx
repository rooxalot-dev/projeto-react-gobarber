import React from 'react';
import { useTransition } from 'react-spring';

import { Container } from './styles';

import { useToast, ToastMessage } from '../../hooks/Toast';

import Toast from './Toast';

interface ToastContainerProps {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  const { removeToast } = useToast();
  const animatedMessages = useTransition(messages, (message) => message.id, {
    from: { right: '-120%' },
    enter: { right: '0%' },
    leave: { right: '-120%' },
  });

  return (
    <Container>
      {animatedMessages.map(({ item: message, key, props }) => (
        <Toast
          key={key}
          style={props}
          type={message.type || 'info'}
          title={message.title}
          description={message.description}
          onClose={() => {
            removeToast(message.id);
          }}
        />
      ))}
    </Container>
  );
};

export default ToastContainer;
