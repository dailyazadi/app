/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Story extends Component {
  render () {
    const { post, id } = this.props
    const { title, excerpt, images, modified } = post

    const date = new Date(modified).toLocaleTimeString()
    console.log(date)

    return (
      <Link className='post-link' to={`post/${id}`}>
        <div className='row'>
          <div className='col-sm-12 col-md-4'>
            <h4>{title.rendered}</h4>

            <p>{excerpt.rendered}</p>
            <p className='text-warning small'>وقتِ اشاعت: {date}</p>
          </div>
          <div className='col-md-7 border-right-1'>
            <img className='img-fluid' src={images.full} alt='' />
          </div>
        </div>
      </Link>
    )
  }
}

export default Story
