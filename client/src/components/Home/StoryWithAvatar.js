import React, { Component } from 'react';

class StoryWithAvatar extends Component {
  render() {
    const { post } = this.props;
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
            <h5>{post.title.rendered}</h5>
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
