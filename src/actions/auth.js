import { REGISTER_FAILURE, REGISTER_SUCCESS } from './actionType';

// eslint-disable-next-line import/prefer-default-export
export const newUser = (userObj) => async (dispatch) => {
  console.log(userObj);
  try {
    const { body: success } = await fetch('http://localhost:9003/api/v1/users/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userObj),
    });
    if (success) {
      return dispatch({ type: REGISTER_SUCCESS });
    }
  } catch (error) {
    console.log(error);
    dispatch({ type: REGISTER_FAILURE });
  }
  return dispatch({ type: REGISTER_FAILURE });
};
