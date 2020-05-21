import React, { useCallback, useRef } from 'react';
import { FiArrowLeft, FiUser, FiMail, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { Link, useHistory } from 'react-router-dom';
import logoImg from '../../assets/logo.svg';

import api from '../../services/api';

import { useToast } from '../../hooks/Toast';
import getValidationErrors from '../../utils/getValidationErrors';
import {
  Container,
  SignUpBackground,
  SignUpContent,
  AnimatedContent,
} from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';

const SignUp: React.FC = () => {
  const history = useHistory();
  const { addToast } = useToast();

  const schema = Yup.object().shape({
    name: Yup.string().required('Nome obrigatório'),
    email: Yup.string()
      .email('Digite um e-mail válido')
      .required('Email obrigatório'),
    password: Yup.string().min(6, 'Senha deve possuír ao menos 6 caracteres'),
  });

  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: object) => {
    try {
      if (formRef && formRef.current) {
        formRef.current.setErrors({});
      }

      const validatedData = await schema.validate(data, { abortEarly: false });
      const createdUser = await api.post('/users', validatedData);

      addToast({
        type: 'success',
        title: 'Usuário criado com sucesso!',
        description: 'Agora realize seu logon',
      });

      history.push('/');
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);
        if (formRef && formRef.current) {
          formRef.current.setErrors(errors);
        }
      } else {
        addToast({
          type: 'error',
          title: 'Não foi possível realizar seu cadastro!',
          description: 'Tente novamente.',
        });
      }
    }
  }, []);

  return (
    <Container>
      <SignUpBackground />
      <SignUpContent>
        <AnimatedContent>
          <img src={logoImg} alt="GoBarber" />

          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Faça seu cadastro</h1>

            <Input
              type="text"
              icon={FiUser}
              autoComplete="off"
              placeholder="Nome"
              name="name"
            />

            <Input
              type="text"
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

          <Link to="/">
            <FiArrowLeft />
            Voltar para logon
          </Link>
        </AnimatedContent>
      </SignUpContent>
    </Container>
  );
};

export default SignUp;
