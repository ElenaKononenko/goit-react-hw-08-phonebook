import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../Navigation/Navigation.module.css';
import { Nav } from 'react-bootstrap';
const AuthNav = () => {
  return (
    <div>
      <NavLink
        to="/register"
        exact
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        <Nav.Link href="/register">Регистрация</Nav.Link>
      </NavLink>
      <NavLink
        to="/login"
        exact
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        <Nav.Link href="/login">Логин</Nav.Link>
      </NavLink>
    </div>
  );
};
export default AuthNav;
