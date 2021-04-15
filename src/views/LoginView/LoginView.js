import React, { Component } from 'react';

class LoginView extends Component {
  state = {
    email: '',
    password: '',
  };
  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { email, password } = this.state;
    return (
      <>
        <h1>Страница логина</h1>
        <form onSubmit={this.handleSubmit} autoComplete="off">
          <label>
            Почта
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Пароль
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </label>
        </form>
      </>
    );
  }
}
export default LoginView;
