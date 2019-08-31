import React, { Component } from 'react';

class SmallStory extends Component {
  render() {
    const { post } = this.props;
    const { title, excerpt, images, modified } = post;

    const date = new Date(modified).toLocaleTimeString();
    console.log(date);

    return (
      <div className="row p-2 mt-3">
        <div className="col-md-8">
          <h6>{title.rendered}</h6>
        </div>
        <div className="col-md-4">
          <img className="img-fluid" src={images.medium} />
        </div>
      </div>
    );
  }
}

export default SmallStory;
