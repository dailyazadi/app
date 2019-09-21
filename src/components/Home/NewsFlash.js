import React, { Component } from 'react';

class NewsFlash extends Component {
  render() {
    const { post } = this.props;

    return (
      <div>
        {post && (
          <div className="row">
            <div className="col-md-3">
              <h5>{post.title.rendered}</h5>
            </div>
            <div className="col-md-8">
              <ul>
                <li>اردو ٹیکسٹ یہاں پہ</li>
                <li>اردو ٹیکسٹ یہاں پہ</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default NewsFlash;
