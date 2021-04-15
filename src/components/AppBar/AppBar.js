import React from 'react';
import Navigation from '../Navigation/Navigation';
import AuthNav from '../AuthNav/AuthNav';

const AppBar = () => (
  <>
    <Navigation />
    <AuthNav />
  </>
);
export default AppBar;

// const AppBar = ({ isAuthenticated }) => (
//     <header style={styles.header}>
//       <Navigation />
//       {isAuthenticated ? <UserMenu /> : <AuthNav />}
//     </header>
//   );
