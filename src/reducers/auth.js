import {
  REGISTER_FAILURE, REGISTER_SUCCESS, REGISTER_CONFLICT,
} from '../actions/actionType';

const initialstate = {
  token: localStorage.getItem('authorization'),
  isRegistered: false,
};

export default (state = initialstate, { type, payload }) => {
  switch (type) {
    case REGISTER_SUCCESS:
      localStorage.setItem('authorization', payload);
      return {
        ...state,
        isRegistered: true,
      };
    case REGISTER_FAILURE:
      localStorage.removeItem('authorization');
      return {
        ...state,
        token: null,
        errors: payload,
      };
    case REGISTER_CONFLICT:
      localStorage.removeItem('authorization');
      return {
        ...state,
        token: null,
        errors: payload,
      };
    default:
      return state;
  }
};
