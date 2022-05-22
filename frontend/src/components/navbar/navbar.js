import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const mobile = () => {
  const desktop = document.getElementById('navbarDesktop');
  const button = document.getElementById('burguerButton');
  button.classList.toggle('is-active');
  desktop.classList.toggle('is-active');
};

const NavBar = () => {
  return (
    <Fragment>
      <nav className="navbar has-background-grey-light" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img src="img" alt="logo" width="112" height="28" />
          </a>

          <a role="button" id="burguerButton" class="navbar-burger" onClick={mobile}>
            <span></span>
            <span></span>
            <span></span>
          </a>
        </div>

        <div className="navbar-menu" id="navbarDesktop">
          <div className="navbar-start">
            <a className="navbar-item">Home</a>

            <a className="navbar-item">Itens</a>

            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">More</a>

              <div className="navbar-dropdown">
                <a className="navbar-item">About</a>
                <a className="navbar-item">Jobs</a>
                <hr />
                <a className="navbar-item">Contact</a>
              </div>
            </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-primary">
                  <Link to={`/sign`}>
                    <strong className="has-text-black">Sign up</strong>
                  </Link>
                </a>
                <a className="button is-light">
                  <Link to={`/login`}>
                    <strong className="has-text-black">Log in</strong>
                  </Link>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default NavBar;
