import { createAction, createReducer, PayloadAction } from '@reduxjs/toolkit';


const initialState = {
  data: [],
};

export const getDragonAction = createAction(
  'GET_DRAGON_ACTION',
);


export default createReducer(initialState, {
  [getDragonAction.type]: (state, action) => {
      console.log(action.payload);
    return {
      ...state,
      data: action.payload,
    };
  },
});
