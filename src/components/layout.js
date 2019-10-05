import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const styles = {
  navbar: {backgroundColor: '#e3f2fd',}
};

const Layout = ({ children }) => (
  <main role="main" className="container">
    <nav key="nav" className="navbar navbar-light mb-4" style={styles.navbar} >
      <Link to="/" className="navbar-brand" >Content</Link>
    </nav>
    {children}
    <footer>React Courses 2019</footer>
  </main>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
