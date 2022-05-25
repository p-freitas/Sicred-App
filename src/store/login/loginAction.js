import { createAction, createReducer, PayloadAction } from '@reduxjs/toolkit';


const initialState = {
  data: [],
};

export const getLoginAction = createAction(
  'GET_LOGIN_ACTION',
);


export default createReducer(initialState, {
  [getLoginAction.type]: (state, action) => {
      console.log(action.payload);
    if (action.payload.length !== 0) localStorage.setItem('authenticated', true);
    return {
      ...state,
      data: action.payload,
    };
  },
});
