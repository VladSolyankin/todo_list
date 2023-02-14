import React from 'react';

const Todo = ({id, name, completed, onDeleteTodo, onShowModal, onCompleteTodo}) => {


	return (
		<div>
			<div className="flex flex-row gap-2">
				<input type="checkbox" onChange={() => { onCompleteTodo(id) }} checked={completed}/>
				<label>
					{name}
				</label>
			</div>
			<div className="flex gap-10 text-xs pt-2">
				<button onClick={() => onShowModal(name, id)} className="underline">Edit</button>
				<button onClick={() => onDeleteTodo(id)} className="underline text-red-600">Delete</button>
			</div>
		</div>
	);
};

export default Todo;