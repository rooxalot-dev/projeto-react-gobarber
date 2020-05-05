import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import { Container, LoginBackground, LoginContent } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';

const SignIn: React.FC = () => {
  return (
    <Container>
      <LoginContent>
        <img src={logoImg} alt="GoBarber" />

        <form>
          <h1>Faça seu logon</h1>

          <Input
            type="email"
            icon={FiMail}
            autoComplete="off"
            placeholder="E-mail"
            name="email"
          />

          <Input
            type="password"
            icon={FiLock}
            placeholder="Senha"
            name="password"
          />

          <Button type="submit">Entrar</Button>

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
