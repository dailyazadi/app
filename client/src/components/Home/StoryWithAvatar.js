import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class StoryWithAvatar extends Component {
  render() {
    const { post, id } = this.props;
    return (
      <div>
        <div className="row">
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-3">
                <h4 className="text-secondary">author</h4>
              </div>
              <div className="col-md-3">
                <img
                  className="img-fluid rounded-circle"
                  src={post.images.medium}
                />
              </div>
            </div>
            <Link className="post-link" to={`post/${id}`}>
              <h6>{post.title.rendered}</h6>
            </Link>
            <p>{post.excerpt.rendered}</p>
            <p className="small text-secondary">udpate</p>
          </div>
          <div className="col-md-6">
            <img className="img-fluid" src={post.images.medium} />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="dropdown-divider"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default StoryWithAvatar;
