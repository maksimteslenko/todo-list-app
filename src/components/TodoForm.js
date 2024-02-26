import React, { useState } from 'react';

function TodoForm({ addTask }) {
  	const [task, setTask] = useState('');

	const handleChange = (e) => {
		setTask(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!task.trim()) return;
		addTask(task);
		setTask('');
	};

	return (
		<form onSubmit={handleSubmit}>
		<div className="input-group mb-3">
			<input
				type="text"
				className="form-control"
				placeholder="Add a new task"
				value={task}
				onChange={handleChange}
			/>
			<button className="btn btn-primary" type="submit">
				Add Task
			</button>
		</div>
		</form>
	);
}

export default TodoForm;