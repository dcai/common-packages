import React from 'react';

const Menu = () => (
  <div className="navbar-menu">
    <div className="navbar-start">
      <a className="navbar-item">Home</a>
      <a className="navbar-item">Documentation</a>
    </div>

    <div className="navbar-end">
      <div className="navbar-item">
        <div className="buttons">
          <a className="button is-tab">Sign up</a>
          <a className="button is-tab">Log in</a>
        </div>
      </div>
    </div>
  </div>
);

const Brand = () => (
  <div className="navbar-brand">
    <a className="navbar-item" href="/">
      React Playground :)
    </a>
  </div>
);

const Header = () => (
  <nav
    className="navbar is-dark"
    role="navigation"
    aria-label="main navigation"
  >
    <Brand />
    <Menu />
  </nav>
);

export default Header;
