import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';
import authselectors from '../../redux/auth/auth-selectors';
import { connect } from 'react-redux';
const Navigation = ({ isAuthenticated }) => (
  <nav>
    <NavLink
      to="/"
      exact
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      Home
    </NavLink>
    {isAuthenticated && (
      <NavLink
        to="/contacts"
        exact
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Contacts
      </NavLink>
    )}
  </nav>
);

const mapStateToProps = state => ({
  isAuthenticated: authselectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);
