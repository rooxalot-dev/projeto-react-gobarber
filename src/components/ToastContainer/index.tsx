import React, { useCallback } from 'react';

import { Container } from './styles';

import { useToast, ToastMessage } from '../../hooks/Toast';

import Toast from './Toast';

interface ToastContainerProps {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  const { removeToast } = useToast();
  const handleCloseToast = useCallback((id: string) => {}, []);

  return (
    <Container>
      {messages.map((message) => (
        <Toast
          key={message.id}
          type={message.type || 'info'}
          title={message.title}
          description={message.description}
          onClose={() => removeToast(message.id)}
        />
      ))}
    </Container>
  );
};

export default ToastContainer;
