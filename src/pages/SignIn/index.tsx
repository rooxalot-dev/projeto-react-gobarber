import React, { useCallback, useRef, useContext } from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { useAuth } from '../../hooks/AuthContext';

import getValidationErrors from '../../utils/getValidationErrors';
import logoImg from '../../assets/logo.svg';
import { Container, LoginBackground, LoginContent } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';

const SignIn: React.FC = () => {
  const { signIn, user } = useAuth();
  const formRef = useRef<FormHandles>(null);

  const schema = Yup.object().shape({
    email: Yup.string()
      .required('E-mail é obrigatório')
      .email('Digite um e-mail válido'),
    password: Yup.string().required('Senha é obrigatória'),
  });

  const handleSubmit = useCallback(
    async (formData: object) => {
      try {
        if (formRef.current) {
          formRef.current.setErrors({});
        }

        const validatedData = await schema.validate(formData, {
          abortEarly: false,
        });

        await signIn(validatedData);
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error);
          if (formRef.current) {
            formRef.current.setErrors(errors);
          }
        }
      }
    },
    [schema],
  );

  return (
    <Container>
      <LoginContent>
        <img src={logoImg} alt="GoBarber" />

        <Form ref={formRef} onSubmit={handleSubmit}>
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
        </Form>

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
