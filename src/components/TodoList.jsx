import React from 'react';

const TodoList = ({list}) => {
	return (
		<ul className="flex flex-col gap-5 py-10">
			{
				...list.map(todo => todo)
			}
		</ul>
	);
};

export default TodoList;