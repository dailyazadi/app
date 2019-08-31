import React, { Component } from 'react';

class FourStoryGrid extends Component {
  render() {
    const { posts } = this.props;
    return (
      <div className="row">
        {posts.map((post, index) => {
          return (
            <div className="col-12 col-sm-6 col-md-3" key={index}>
              <div className="p-4">
                <img className="img-fluid pb-4" src={post.images.medium} />
                <h6>{post.title.rendered}</h6>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default FourStoryGrid;
