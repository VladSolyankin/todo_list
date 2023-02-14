import React, {useState} from 'react';

const ModalWindow = ({todoId, isVisible, onEditTodo, onCloseModal}) => {

	const [value, setValue] = useState('')
	return (
		<div className={isVisible ? 'modal modal__active' : 'modal'}
			 onClick={() => onCloseModal()}>
			<div className="flex flex-col justify-center items-center h-48 w-80 rounded-xl border-2 border-black bg-gray-300 gap-y-4"
				 onClick={(e) => e.stopPropagation()}>
				<input onChange={(e) => setValue(e.target.value)} type="text" className="z-10 py-1 rounded-lg p-3 py-2 drop-shadow shadow-md focus:outline-0 focus:border-2" placeholder="Enter new name..."/>
				<button className="bg-white rounded-lg px-2 py-1 border-black border-2 hover:bg-gray-300 mt-3"
						onClick={() => {
							onEditTodo(value, todoId)
						}}
				>Change</button>
			</div>
		</div>
	);
};

export default ModalWindow;