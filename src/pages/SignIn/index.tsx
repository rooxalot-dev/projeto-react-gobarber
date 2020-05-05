import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import { Container, LoginBackground, LoginContent } from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <LoginContent>
        <img src={logoImg} alt="GoBarber" />

        <form>
          <h1>Faça seu logon</h1>

          <div className="input">
            <input
              type="email"
              autoComplete="off"
              placeholder="E-mail"
              name="email"
            />
          </div>
          <div className="input">
            <input type="password" placeholder="Senha" name="password" />
          </div>

          <button type="submit">Entrar</button>

          <a href="teste">Esqueci minha senha</a>
        </form>

        <a href="teste">
          <FiLogIn />
          Criar conta
        </a>
      </LoginContent>
      <LoginBackground />
    </Container>
  );
};

export default SignIn;
