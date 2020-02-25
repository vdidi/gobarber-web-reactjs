import { takeLatest, call, put, all } from 'redux-saga/effects';
import api from '~/services/api';
import { toast } from 'react-toastify';
import history from '~/services/history';

import { signSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;
    const response = yield call(api.post, 'sessions', {
      email,
      password,
    });

    const { token, user } = response.data;
  } catch(e) {

  }
}

export function* signUp({ payload }) {
  try {
    const { name, email, password } = payload;

    yield call(api.post, 'users', {
      name, email, password, provider: true,
    });
    history.push('/');
  }catch (e) {
    toast.error('Falha no cadastro dos seus dados');
    
    yield put(signFailure());
  }
}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
])