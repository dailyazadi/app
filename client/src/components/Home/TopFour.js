import React, { Component } from 'react';
import SmallStory from './SmallStory';

class TopFour extends Component {
  render() {
    const { post } = this.props;
    return (
      <div className="">
        <div className="dropdown-divider border-dark pb-3 mt-0 pt-0"></div>
        <div className="row pb-3">
          {[1, 2, 3, 4].map((story, index) => {
            return (
              <div className="col-md-3 border-left" key={index}>
                {post && <SmallStory post={post} />}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default TopFour;
