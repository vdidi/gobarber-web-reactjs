import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import logo from '~/assets/logo.svg';
import * as Yup from 'yup';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um email válido')
    .required('O Email é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
});

export default function SignIn() {

  function handleSubmit({email, password}) {
    console.log(email + "" + password);
  }

  return (
    <>
      <img src={logo} alt="GoBarberWeb" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Seu email" />
        <Input
          name="password"
          type="password"
          placeholder="Sua senha secreta"
        />

        <button type="submit">Accessar</button>
        <Link to="/register">Criar conta gratuita</Link>
      </Form>
    </>
  );
}
