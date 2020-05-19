import React from 'react';

import AppProvider from './hooks';
import { ToastProvider } from './hooks/Toast';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

const App: React.FC = () => {
  return (
    <AppProvider>
      <SignIn />
    </AppProvider>
  );
};

export default App;
