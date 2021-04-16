import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './AuthNav.module.css';
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
        <Nav.Link href="/register">Register</Nav.Link>
      </NavLink>
      <NavLink
        to="/login"
        exact
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        <Nav.Link href="/login">Log In</Nav.Link>
      </NavLink>
    </div>
  );
};
export default AuthNav;
