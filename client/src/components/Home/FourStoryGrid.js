import React, { Component } from 'react';

class FourStoryGrid extends Component {
  render() {
    const { posts } = this.props;
    return (
      <div className="row">
        {posts.map((post, index) => {
          return (
            <div className="col-md-3" key={index}>
              <div className="p-4">
                <img className="img-fluid" src={post.images.medium} />
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
