import React from 'react';
import { FiArrowLeft, FiUser, FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';

import logoImg from '../../assets/logo.svg';

import { Container, SignUpBackground, SignUpContent } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';

const SignUp: React.FC = () => {
  const handleSubmit = (data: object) => {
    console.log(data);
  };

  return (
    <Container>
      <SignUpBackground />
      <SignUpContent>
        <img src={logoImg} alt="GoBarber" />

        <Form onSubmit={handleSubmit}>
          <h1>Faça seu cadastro</h1>

          <Input
            type="text"
            icon={FiUser}
            autoComplete="off"
            placeholder="Nome"
            name="name"
          />

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

          <Button type="submit">Cadastrar</Button>
        </Form>

        <a href="teste">
          <FiArrowLeft />
          Voltar para logon
        </a>
      </SignUpContent>
    </Container>
  );
};

export default SignUp;
