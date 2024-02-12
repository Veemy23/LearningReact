import React, { Component } from 'react'
import PostItem from './PostItem'

export default class PostList extends Component {
  render() {
	const {posts, title, remove} = this.props
	 return (
		<div className='post__list'>
		<h1 style={{ textAlign: 'center' }}>{title}</h1>
		{posts.map((post, index) =>
			<PostItem remove={remove} number={index + 1} post={post} key={post.id}></PostItem>
		)}
		</div>
	 )
  }
}
