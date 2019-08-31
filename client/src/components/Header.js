import React from 'react';
import logo from '../logo.svg';
import Navbar from './Navbar';
import TopRow from './TopRow';
const Header = props => {
  const { menus, currentDate } = props;
  return (
    <header className="container-fluid">
      <TopRow />
      <div className="row justify-content-md-center">
        <div className="col-md-auto mb-2">
          <img src={logo} />
          <p>
            <span className="p-1">{currentDate}</span> |
            <span>
              <a className="btn text-danger p-1" href="/e-paper">
                آج کا اخبار
              </a>
            </span>
          </p>
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
