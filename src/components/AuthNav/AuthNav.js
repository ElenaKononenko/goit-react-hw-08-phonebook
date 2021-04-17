import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './AuthNav.module.css';
const AuthNav = () => {
  return (
    <div className={styles.link}>
      <NavLink
        to="/register"
        exact
        className={styles.link}
        // className="nav-link"
        activeClassName={styles.activeLink}
      >
        Register
      </NavLink>
      <NavLink
        to="/login"
        exact
        // className="nav-link"
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Log In
      </NavLink>
    </div>
  );
};
export default AuthNav;
