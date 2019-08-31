import React, { Component } from 'react';
import SmallStory from './SmallStory';

class TopFour extends Component {
  render() {
    const { post } = this.props;
    return (
      <div className="">
        <div className="row pb-3">
          {[1, 2, 3, 4].map((story, index) => {
            return (
              <div
                className={`col-6 col-sm-6 col-md-3 col-lg-3 ${
                  index === 3 ? '' : 'border-left'
                }`}
                key={index}
              >
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
