import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import styles from './Navigation.module.css';
const Navigation = () => (
  <nav>
    <NavLink
      to="/"
      exact
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      <Nav.Link href="/">Home</Nav.Link>
    </NavLink>
    <NavLink
      to="/contacts"
      exact
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      <Nav.Link href="/contacts">Contacts</Nav.Link>
    </NavLink>
  </nav>
);

export default Navigation;
