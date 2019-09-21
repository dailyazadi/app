import React, { Component } from 'react';
import { POSTS } from '../../constants';

class SingleStory extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.setState({
      post: POSTS[+id]
    });
  }
  render() {
    const { post } = this.state;
    return <div>{post && <h1>{post.title.rendered}</h1>}</div>;
  }
}

export default SingleStory;
