import React, { createContext, useContext, useCallback, useState } from 'react';

import api from '../services/api';

interface AuthContextData {
  user: object;

  signIn(signInData: SignInCredentials): Promise<void>;
  signOut(): void;
}

interface AuthState {
  token: string;
  user: object;
}

interface SignInCredentials {
  email: string;
  password: string;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const LS_TOKEN_KEY = '@GoBarber:token';
  const LS_USER_KEY = '@GoBarber:user';

  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem(LS_TOKEN_KEY);
    const user = localStorage.getItem(LS_USER_KEY);

    if (token && user) {
      return {
        token,
        user: JSON.parse(user),
      };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }: SignInCredentials) => {
    const response = await api.post('/sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    setData({ token, user });

    localStorage.setItem(LS_TOKEN_KEY, JSON.stringify(token));
    localStorage.setItem(LS_USER_KEY, JSON.stringify(user));
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem(LS_TOKEN_KEY);
    localStorage.removeItem(LS_USER_KEY);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = (): AuthContextData => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAth must be used in a component inside AuthProvider');
  }

  return context;
};

export { AuthProvider, useAuth };
