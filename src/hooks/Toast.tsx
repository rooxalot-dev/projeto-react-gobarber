import React, { createContext, useContext, useCallback, useState } from 'react';
import { uuid } from 'uuidv4';

import ToastContainer from '../components/ToastContainer';

interface ToastConxtextData {
  addToast(message: Omit<ToastMessage, 'id'>): void;
  removeToast(id: string): void;
}

export interface ToastMessage {
  id: string;
  title: string;
  description?: string;
  type?: 'info' | 'success' | 'error';
}

const ToastContext = createContext<ToastConxtextData>({} as ToastConxtextData);

const ToastProvider: React.FC = ({ children }) => {
  const [messages, setMessages] = useState<ToastMessage[]>([]);

  const addToast = useCallback(
    ({ title, description, type = 'info' }) => {
      const message = {
        id: uuid(),
        title,
        description,
        type,
      };

      setMessages([...messages, message]);
    },
    [messages],
  );

  const removeToast = useCallback(
    (id) => {
      const filteredMessages = messages.filter((message) => message.id !== id);
      setMessages([...filteredMessages]);
    },
    [messages],
  );

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer messages={messages} />
    </ToastContext.Provider>
  );
};

const useToast = (): ToastConxtextData => {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast must be used within a ToastProvider!');
  }

  return context;
};

export { useToast, ToastProvider };
