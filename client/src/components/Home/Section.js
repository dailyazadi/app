import React, { Component } from 'react';
import Col2Story from '../Col2Story';
import HeadlinesList from '../HeadlinesList';

class Section extends Component {
  render() {
    const { sectionTitle, post } = this.props;
    return (
      <div className="">
        <div className="row p-0 m-0">
          <h3 className="p-0 m-0">{sectionTitle}</h3>
        </div>
        <div className="dropdown-divider border-dark pb-3 pt-0 mt-0"></div>
        <div className="row">
          <div className="col-md-7">{post && <Col2Story post={post} />}</div>
          <div className="col-md-5">
            <HeadlinesList />
          </div>
        </div>
      </div>
    );
  }
}

export default Section;
