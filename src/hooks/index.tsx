import React from 'react';

import { AuthProvider } from './Auth';
import { ToastProvider } from './Toast';

const AppProvider: React.FC = ({ children }) => {
  return (
    <ToastProvider>
      <AuthProvider>{children}</AuthProvider>
    </ToastProvider>
  );
};

export default AppProvider;
