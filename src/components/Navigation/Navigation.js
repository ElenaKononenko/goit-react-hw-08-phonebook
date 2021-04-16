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
      <Nav.Link href="/">Главная</Nav.Link>
    </NavLink>
    <NavLink
      to="/contacts"
      exact
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      <Nav.Link href="/contacts">Контакты</Nav.Link>
    </NavLink>
  </nav>
);

export default Navigation;
