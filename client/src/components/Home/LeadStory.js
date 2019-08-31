import React, { Component } from 'react';
import Story from '../Story';

class LeadStory extends Component {
  render() {
    const { post } = this.props;

    return (
      <div className="row">
        <div className="col">{post && <Story post={post} id={1} />}</div>
      </div>
    );
  }
}

export default LeadStory;
