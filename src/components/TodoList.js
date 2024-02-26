import React from 'react';

function TodoList({ tasks }) {
	return (
		<ul className="list-group">
		{tasks.length > 0 ? (
			tasks.map((task, index) => (
				<li key={index} className="list-group-item">
					{task}
				</li>
			))
			) : (
				<li className="list-group-item text-muted">No tasks added yet</li>
		)}
		</ul>
	);
}

export default TodoList;