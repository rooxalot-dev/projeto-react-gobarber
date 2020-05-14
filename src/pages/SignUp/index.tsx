import React, { useCallback, useRef } from 'react';
import { FiArrowLeft, FiUser, FiMail, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import logoImg from '../../assets/logo.svg';

import getValidationErrors from '../../utils/getValidationErrors';
import { Container, SignUpBackground, SignUpContent } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';

const SignUp: React.FC = () => {
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
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);
        if (formRef && formRef.current) {
          formRef.current.setErrors(errors);
        }
      } else {
        console.log('Generic Error', err);
      }
    }
  }, []);

  return (
    <Container>
      <SignUpBackground />
      <SignUpContent>
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

        <a href="teste">
          <FiArrowLeft />
          Voltar para logon
        </a>
      </SignUpContent>
    </Container>
  );
};

export default SignUp;
