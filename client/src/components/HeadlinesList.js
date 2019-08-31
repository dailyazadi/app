import React, { Component } from 'react';

class HeadlinesList extends Component {
  render() {
    return (
      <ul className="list-group">
        <li className="list-group-item border-0 p-0 m-0">
          <a className="h4 btn p-0 m-0 pb-1" href="#">
            Cras justo odio
          </a>
        </li>
        <li className="list-group-item border-0 p-0 m-0">
          <a className="h4 btn p-0 m-0 pb-1" href="#">
            Dapibus ac facilisis in
          </a>
        </li>
        <li className="list-group-item border-0 p-0 m-0">
          <a className="h4 btn p-0 m-0 pb-1" href="#">
            Morbi leo risus
          </a>
        </li>
        <li className="list-group-item border-0 p-0 m-0">
          <a className="h4 btn p-0 m-0 pb-1" href="#">
            Porta ac consectetur ac
          </a>
        </li>
        <li className="list-group-item border-0 p-0 m-0">
          <a className="h4 btn p-0 m-0 pb-1" href="#">
            Vestibulum at eros
          </a>
        </li>
      </ul>
    );
  }
}

export default HeadlinesList;
