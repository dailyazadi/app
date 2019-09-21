/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import Story from '../Story'
import StoryWithAvatar from './StoryWithAvatar'

class Editorial extends Component {
  render () {
    const { post, id } = this.props
    return (
      <div>
        <h4>اِداریہ</h4>
        {post && <StoryWithAvatar post={post} id={id} />}
      </div>
    )
  }
}

export default Editorial
