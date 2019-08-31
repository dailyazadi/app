import React, { Component } from 'react';

class SmallStory extends Component {
  render() {
    const { post } = this.props;
    const { title, excerpt, images, modified } = post;
    const date = new Date(modified).toLocaleTimeString();

    return (
      <div className="row p-2 mt-3">
        <div className="col-sm-7 col-md-7 col-lg-7">
          <h6>{title.rendered}</h6>
        </div>
        <div className="col-sm-5 col-md-5 col-lg-5">
          <img className="img-fluid" src={images.medium} />
        </div>
      </div>
    );
  }
}

export default SmallStory;
