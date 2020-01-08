import {
  REGISTER_FAILURE, REGISTER_SUCCESS, REGISTER_CONFLICT,
} from '../actions/actionType';

const initialstate = {
  isLoading: true,
  token: localStorage.getItem('authorization'),
  errors: {},
};

export default (state = initialstate, { type, payload }) => {
  switch (type) {
    case REGISTER_SUCCESS:
      localStorage.setItem('authorization', payload);
      return {
        ...state,
        isLoading: false,
      };
    case REGISTER_FAILURE:
      localStorage.removeItem('authorization');
      return {
        ...state,
        isLoading: false,
        token: null,
        errors: payload,
      };
    case REGISTER_CONFLICT:
      localStorage.removeItem('authorization');
      return {
        ...state,
        isLoading: false,
        token: null,
        errors: payload,
      };
    default:
      return state;
  }
};
