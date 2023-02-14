import React from 'react';

const RemainingTasks = ({remainingTodos}) => {

	return (
		<div>
			{
				remainingTodos.length ? `${remainingTodos.length} todos remaining!` : "Nothing left to do!"
			}
		</div>
	);
};

export default RemainingTasks;