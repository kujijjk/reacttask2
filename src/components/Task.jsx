import React, { useState } from 'react'

const Task = () => {
	const [text, setText] = useState('')
	const handleInputChange = event => {
		setText(event.target.value)
	}
	return (
		<div className='main'>
			<p>Dream: {text}</p>
			<input
				type='text'
				value={text}
				onChange={handleInputChange}
				placeholder='Капибара имба!'
			/>
		</div>
	)
}

export default Task
