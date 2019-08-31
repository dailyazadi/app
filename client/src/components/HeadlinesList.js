import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HeadlinesList extends Component {
  render() {
    return (
      <ul className="list-group d-none d-md-block">
        <li className="list-group-item border-0 p-0 m-0">
          <Link className="h4 btn p-0 m-0 pb-1" to={`post/1`}>
            Cras justo odio
          </Link>
        </li>
        <li className="list-group-item border-0 p-0 m-0">
          <Link className="h4 btn p-0 m-0 pb-1" to={`post/1`}>
            Dapibus ac facilisis in
          </Link>
        </li>
        <li className="list-group-item border-0 p-0 m-0">
          <Link className="h4 btn p-0 m-0 pb-1" to={`post/1`}>
            Morbi leo risus
          </Link>
        </li>
        <li className="list-group-item border-0 p-0 m-0">
          <Link className="h4 btn p-0 m-0 pb-1" to={`post/1`}>
            Porta ac consectetur ac
          </Link>
        </li>
        <li className="list-group-item border-0 p-0 m-0">
          <Link className="h4 btn p-0 m-0 pb-1" to={`post/1`}>
            Vestibulum at eros
          </Link>
        </li>
      </ul>
    );
  }
}

export default HeadlinesList;
