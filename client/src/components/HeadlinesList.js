import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HeadlinesList extends Component {
  render() {
    return (
      <ul className="list-group d-none d-md-block">
        {[1, 2, 3, 4, 5].map((story, index) => {
          return (
            <li className="list-group-item border-0 p-0 m-0">
              <Link
                className="h4 btn p-0 m-0 pb-1 post-link"
                to={`post/${index + 1}`}
              >
                Cras justo odio
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default HeadlinesList;
