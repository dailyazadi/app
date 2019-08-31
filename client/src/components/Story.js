import React, { Component } from 'react';

class Story extends Component {
  render() {
    const { post } = this.props;
    const { title, excerpt, images, modified } = post;

    const date = new Date(modified).toLocaleTimeString();
    console.log(date);

    return (
      <div className="row">
        <div className="col-sm-12 col-md-4">
          <h4>{title.rendered}</h4>
          <p>{excerpt.rendered}</p>
          <p className="text-warning small">وقتِ اشاعت: {date}</p>
        </div>
        <div className="col-md-7 border-right-1">
          <img className="img-fluid" src={images.full} />
        </div>
      </div>
    );
  }
}

export default Story;
