import React from 'react';

const FilterButtons = ({onShowAll, onShowCompleted, onShowInProgress}) => {
	return (
		<div className="flex justify-between items-center gap-5 text-xs p-5">
			<button className="button__filter" onClick={() => onShowAll()}>Show all</button>
			<button className="button__filter" onClick={() => onShowInProgress()}>Only in-progress</button>
			<button className="button__filter" onClick={() => onShowCompleted()}>Completed</button>
		</div>
	);
};

export default FilterButtons;