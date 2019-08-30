import React from 'react';
import logo from '../logo.svg';
import Navbar from './Navbar';
const Header = props => {
  const { menus } = props;
  return (
    <header className="container-fluid">
      <div className="row justify-content-md-center">
        <div className="col-md-auto mb-4">
          <img src={logo} />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="dropdown-divider p-0 m-0"></div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-auto">
          <Navbar menus={menus} />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="dropdown-divider p-0 m-0"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
