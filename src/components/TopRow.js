import React, { Component } from 'react';

class TopRow extends Component {
  render() {
    return (
      <div className="row navbar">
        <div className="col-md-4"></div>
        <div className="col-md-4 text-center">
          <ul className="navbar-nav justify-content-center flex-flow-nwrp p-0">
            <li className="nav-item active ml-3 d-flex">
              <a className="nav-link btn active" href="/">
                اُردو
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link btn" href="https://bexpress.com.pk">
                English
              </a>
            </li>
          </ul>
        </div>

        <div className="col-md-4"></div>
      </div>
    );
  }
}

export default TopRow;
