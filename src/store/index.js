import { configureStore } from '@reduxjs/toolkit';
import dragonsAction from './dragons/dragonsAction';
import loginAction from './login/loginAction';

export const store = configureStore({
   reducer: {
      login: loginAction,
      dragon: dragonsAction,
   },
});
