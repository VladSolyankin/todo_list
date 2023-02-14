import React, {useState} from 'react';



const Form = ({title, placeholder, onAddTodo, buttonText}) => {
	function onNewTodoSubmit(e) {
		e.preventDefault()
		onAddTodo(name)
		setName('')
	}
	function onNewTodoChange(e) {
		setName(e.target.value)
	}


	const [name, setName] = useState('')
	return (
		<form className="flex flex-col justify-center items-center"
			  onSubmit={onNewTodoSubmit}
		>
			<h2 className="text-sm">{title}</h2>

			<div className="flex p-5 gap-10">
				<input type="text" className="py-2 px-3 rounded-lg drop-shadow shadow-lg focus:outline-0 focus:shadow-inner"
					   value={name}
					   placeholder={placeholder}
					   onChange={onNewTodoChange}
					   />
				<button type="submit" className="text-sm hover:underline">{buttonText}</button>
			</div>
		</form>
	);
};

export default Form;