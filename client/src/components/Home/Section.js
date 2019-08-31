import React, { Component } from 'react';
import Story from '../Story';
import Col2Story from '../Col2Story';

class Section extends Component {
  render() {
    const { sectionTitle, post } = this.props;
    return (
      <div className="">
        <div className="row">
          <h2>{sectionTitle}</h2>
        </div>
        <div className="dropdown-divider border-dark pb-3"></div>
        <div className="row">
          <div className="col-md-8">{post && <Col2Story post={post} />}</div>
          <div className="col-md-4">ss</div>
        </div>
      </div>
    );
  }
}

export default Section;
