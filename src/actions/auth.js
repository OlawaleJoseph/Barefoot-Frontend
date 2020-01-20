/* eslint-disable import/prefer-default-export */
import {
  REGISTER_FAILURE, REGISTER_SUCCESS, REGISTER_CONFLICT, SERVER_ERROR,
} from './actionType';
// eslint-disable-next-line consistent-return
export const newUser = (userObj) => async (dispatch) => {
  let result;
  let res;
  try {
    res = await fetch('http://localhost:9003/api/v1/users/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userObj),
    });
    result = await res.json();
    if (result.success) {
      return dispatch({ type: REGISTER_SUCCESS, payload: result.data.token });
    }
  } catch (error) {
    return dispatch({ type: SERVER_ERROR, payload: error });
  }
  if (res.status === 409) {
    const div = document.querySelector('#email-div');
    const e = document.createElement('small');
    e.textContent = result.errors;
    e.classList.add('errorContainer');
    div.appendChild(e);
    return dispatch({ type: REGISTER_CONFLICT });
  }
  Object.keys(result.errors).forEach((err) => {
    const div = document.querySelector(`#${err}-div`);
    const e = document.createElement('small');
    e.textContent = result.errors;
    e.classList.add('errorContainer');
    div.appendChild(e);
  });
  return dispatch({ type: REGISTER_FAILURE });
};
