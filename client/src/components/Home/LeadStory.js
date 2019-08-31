import React, { Component } from 'react';
import Story from '../Story';

class LeadStory extends Component {
  render() {
    const { post } = this.props;

    return (
      <div className="row">
        <div className="col-md-12">{post && <Story post={post} />}</div>
      </div>
    );
  }
}

export default LeadStory;
