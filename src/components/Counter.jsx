import React, { Component, useState } from 'react'

const Counter = () =>{
	const [count, setCount] = useState(0)

	function plus() {
		setCount(count + 1)
	}
	function minus() {
		setCount(count - 1)

	}
	return (
		<div className="">
			<h1>{count}</h1>
			<button onClick={plus}>plus</button>
			<button onClick={minus}>minus</button>
		</div>
	)
}

export default Counter