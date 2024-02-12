import React, { useRef, useState } from "react";
import './styles/App.css'
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";

function App() {
	const [posts, setPosts] = useState([
		{ id: 1, title: 'javaScript', content: 'JavaScript - asdasasdasdasd' },
		{ id: 2, title: 'javaScript', content: 'JavaScript - asdasasdasdasd' },
		{ id: 3, title: 'javaScript', content: 'JavaScript - asdasasdasdasd' }
	])
	const [title, setTitle] = useState('')
	const [content, setContent] = useState('')
	const bodyInput = useRef()
	const createPost = (newPost) =>{
		setPosts([...posts, newPost])
	}
	const removePost = (post) =>{
		setPosts(posts.filter(p => p.id !== post.id))

	}

	return (
		<div className="App">
			<PostForm create={createPost} posts={posts}></PostForm>
			<PostList remove={removePost} posts={posts} title={'Posts List JS'}></PostList>
		</div>


	);
}

export default App;
