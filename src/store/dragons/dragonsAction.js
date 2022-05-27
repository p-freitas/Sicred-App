import { createAction, createReducer } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  dragon: {
    name: '',
    type: '',
    createdAt: '',
  },
  isLoadingSearch: false,
};

export const getDragonAction = createAction(
  'GET_DRAGON_ACTION',
);
export const startLoadingSearch = createAction(
  'START_LOADING_SEARCH',
);
export const endLoadingSearch = createAction(
  'END_LOADING_SEARCH',
);
export const clearDragon = createAction(
  'CLEAR_DRAGON',
);

export default createReducer(initialState, {
  [getDragonAction.type]: (state, action) => {
    return {
      ...state,
      dragon: action.payload,
    };
  },
  [startLoadingSearch.type]: (state, { payload }) => {
    return {
      ...state,
      [!payload ? 'isLoadingSearch' : payload]: true,
    };
  },
  [endLoadingSearch.type]: (state, { payload }) => {
    return {
      ...state,
      [!payload ? 'isLoadingSearch' : payload]: false,
    };
  },
  [clearDragon.type]: (state) => {
    return {
      ...state,
      dragon: initialState.dragon,
    };
  },
});
