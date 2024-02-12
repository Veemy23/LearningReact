import React, { useState } from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import './styles/App.css'
function App() {
	const [likes, setLikes] = useState(0)
	const [value, setValue] = useState('Tekst input')

	return (
		<div className="App">
			<div className="post">
				<div className="post_content">
					<strong>1. javaScript</strong>
					<div>
						JavaScript - asdasasdasdasd
					</div>
					<div className="post__btns">
						<button>Remove</button>
					</div>
				</div>
			</div>
		</div>


	);
}

export default App;
