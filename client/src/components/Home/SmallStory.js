import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SmallStory extends Component {
  render() {
    const { post } = this.props;
    const { title, excerpt, images, modified } = post;

    return (
      <Link className="post-link" to="post/1">
        <div className="row p-2 mt-3">
          <div className="col-sm-7 col-md-7 col-lg-7">
            <h6>{title.rendered}</h6>
          </div>
          <div className="col-sm-5 col-md-5 col-lg-5">
            <img className="img-fluid" src={images.medium} />
          </div>
        </div>
      </Link>
    );
  }
}

export default SmallStory;
