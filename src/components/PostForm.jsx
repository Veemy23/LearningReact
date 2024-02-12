import React, { useRef, useState } from 'react'
import MyInput from './UI/input/MyInput'
import MyButton from './UI/button/MyButton'

export default function PostForm({create, posts}) {
	const [post, setPost] = useState({ title: '', content: '' })

	const addNewPost = (e) => {
		e.preventDefault();
		if (post.title !== '' && post.content !== '') {
			const newPost = {
				...post, id: posts.length + 1
			}
			create(newPost)
			setPost({ title: '', content: '' })
		}


	}
  return (
	<form className="create__post">
	<MyInput value={post.title} onChange={e => setPost({...post, title: e.target.value})} placeholder='title'></MyInput>
	<MyInput value={post.content} onChange={e => setPost({...post, content: e.target.value})} placeholder='description'></MyInput>
	<MyButton onClick={addNewPost}>Create</MyButton>
</form>
  )
}
