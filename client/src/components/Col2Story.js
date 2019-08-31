import React, { Component } from 'react';

class Col2Story extends Component {
  render() {
    const { post } = this.props;
    const { title, excerpt, images, modified } = post;

    const date = new Date(modified).toLocaleTimeString();
    console.log(date);

    return (
      <div className="row">
        <div className="col-md-6">
          <h5>{title.rendered}</h5>
          <p>{excerpt.rendered}</p>
          <p className="text-warning small">وقتِ اشاعت: {date}</p>
        </div>
        <div className="col-md-6 border-right-1">
          <img className="img-fluid" src={images.full} />
        </div>
      </div>
    );
  }
}

export default Col2Story;
