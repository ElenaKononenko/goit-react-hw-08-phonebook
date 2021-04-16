import React from 'react';
import { connect } from 'react-redux';
import Navigation from '../Navigation/Navigation';
import AuthNav from '../AuthNav/AuthNav';
import UserMenu from '../UserMenu/UserMenu';
import authSelectors from '../../redux/auth/auth-selectors';
import { Navbar, Nav } from 'react-bootstrap';
const AppBar = ({ isAuthenticated }) => {
  console.log(isAuthenticated);
  return (
    <header>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">PC</Navbar.Brand>
        <Nav className="mr-auto">
          <Navigation />
        </Nav>
        <Nav className="mr-auto">
          {isAuthenticated ? <UserMenu /> : <AuthNav />}
        </Nav>
      </Navbar>
    </header>
  );
};
const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(AppBar);

// const AppBar = ({ isAuthenticated }) => (
//     <header style={styles.header}>
//       <Navigation />
//       {isAuthenticated ? <UserMenu /> : <AuthNav />}
//     </header>
//   );
