import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class FourStoryGrid extends Component {
  render() {
    const { posts, id } = this.props;
    return (
      <div className="row">
        {posts.map((post, index) => {
          return (
            <div className="col-12 col-sm-6 col-md-3" key={index}>
              <div className="p-4">
                <img className="img-fluid pb-4" src={post.images.medium} />
                <Link className="post-link" to={`post/${id}`}>
                  <h6>{post.title.rendered}</h6>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default FourStoryGrid;
