import React, { useCallback, useRef, useContext } from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../hooks/Auth';
import { useToast } from '../../hooks/Toast';

import getValidationErrors from '../../utils/getValidationErrors';
import logoImg from '../../assets/logo.svg';
import {
  Container,
  LoginBackground,
  LoginContent,
  AnimatedContent,
} from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';

const SignIn: React.FC = () => {
  const { signIn, user } = useAuth();
  const { addToast } = useToast();

  const history = useHistory();
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

        addToast({
          type: 'success',
          title: 'Login realizado com sucesso',
          description: 'Seja bem vindo!',
        });

        history.push('/dashboard');
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error);
          if (formRef.current) {
            formRef.current.setErrors(errors);
            return;
          }
        }

        addToast({
          type: 'error',
          title: 'Erro na autenticação',
          description: 'Não foi possível concluir seu logon. Tente novamente!',
        });
      }
    },
    [schema, signIn, addToast, history],
  );

  return (
    <Container>
      <LoginContent>
        <AnimatedContent>
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

          <Link to="/signup">
            <FiLogIn />
            Criar conta
          </Link>
        </AnimatedContent>
      </LoginContent>
      <LoginBackground />
    </Container>
  );
};

export default SignIn;
