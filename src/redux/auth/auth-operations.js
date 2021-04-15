import axios from 'axios';
import authActions from './auth-actions';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com ';
const token = {
  set(token) {
    axios.defaults.headers.common.Authorizacion = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorizacion = '';
  },
};

const register = credentials => dispatch => {};

const logIn = credentials => dispatch => {};
const logOut = () => dispatch => {};
const getCurrentUser = () => (dispatch, getState) => {};

export default { register, logIn, logOut, getCurrentUser };
