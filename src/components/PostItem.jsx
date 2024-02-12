import React, { Component } from 'react'

export class PostItem extends Component {
  render() {
	const {post, number, remove} = this.props
	 return (
		<div className="post">
		<div className="post__content">
			<strong>{number} {post.title}</strong>
			<div>
			{post.content}
			</div>
		</div>
			<div className="post__btns">
				<button onClick={()=>remove(post)}>Remove</button>
			</div>
	</div>
	 )
  }
}

export default PostItem