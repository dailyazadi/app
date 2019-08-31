import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Col2Story extends Component {
  render() {
    const { post, id } = this.props;
    const { title, excerpt, images, modified } = post;
    const date = new Date(modified).toLocaleTimeString();

    return (
      <div className="row">
        <div className="col-md-6">
          <Link to={`post/${id}`}>
            <h5>{title.rendered}</h5>
          </Link>
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
