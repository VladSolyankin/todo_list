import Logo from "./components/Logo.jsx";
import Form from "./components/Form.jsx";
import FilterButtons from "./components/FilterButtons.jsx";
import RemainingTasks from "./components/RemainingTasks.jsx";
import TodoList from "./components/TodoList.jsx";
import Todo from "./components/Todo.jsx";
import ModalWindow from "./components/ModalWindow.jsx";
import React, {useEffect, useState} from "react";
import {nanoid} from "nanoid";


function App({...props}) {

    const [todos, setTodos] = useState(props.todos)
    const [todoFilter, setTodoFilter] = useState('All')
    const [remainingTodos, setRemainingTodos] = useState(todos)
    const [modal, setModal] = useState(false)
    const [todoId, setTodoId] = useState(0)

    const filters = {
        'All': () => true,
        'Only in-progress': (task) => !task.completed,
        'Completed': (task) => task.completed
    }

    function onAddTodo(name) {
        const newTodo = {id: nanoid(), name, completed: false}
        setTodos(todos => [...todos, newTodo])
    }

    useEffect(() => {
        setRemainingTodos(todos.filter(todo => todo.completed === false))
    })

    function onDeleteTodo(id) {
        const remainingTodos = todos.filter(todo => todo.id !== id)
        setTodos(remainingTodos)
    }

    function onEditTodo(newName, todoId) {
        setModal(false)
        const editedTodos = todos.map(todo => {
            return todo.id === todoId ? {...todo, name: newName} : {...todo}
        })
        setTodos(editedTodos)
    }

    function onCompleteTodo(id) {
        const newTodos = todos.map(todo => {
            return todo.id === id ? {...todo, completed: !todo.completed} : todo
        })
        setTodos(newTodos)
        const uncompletedTodos = newTodos.filter(todo => todo.completed === false)
        setRemainingTodos(uncompletedTodos)
    }

    function onShowModal(name, id) {
        setModal(true)
        setTodoId(id)
    }
    function onShowAll() {
        setTodoFilter('All')
    }

    function onShowInProgress() {
        setTodoFilter('Only in-progress')
    }

    function onShowCompleted() {
        setTodoFilter('Completed')
    }

    function onCloseModal() {
        setModal(false)
    }

    const todosList = todos.filter(filters[todoFilter]).map(({id, name, completed}) => (
        <Todo
            key={id}
            id={id}
            name={name}
            completed={completed}
            onDeleteTodo={onDeleteTodo}
            onShowModal={onShowModal}
            onCompleteTodo={onCompleteTodo}
        />
    ))


    return (
    <div className="w-screen h-screen flex flex-col justify-top items-center sticky mt-5">
        <div className="flex flex-col justify-center items-center border-2 rounded-lg border-gray-300 drop-shadow shadow-2xl shadow-indigo-400">
            <Logo />
            <h1 className="text-xl font-bold">Todo List</h1>
            <Form title="Let's plan some deals to do!"
                  placeholder="Enter new todo!"
                  buttonText="Add"
                  onAddTodo={onAddTodo} />
            <FilterButtons onShowAll={onShowAll} onShowInProgress={onShowInProgress} onShowCompleted={onShowCompleted}/>
            <RemainingTasks remainingTodos={remainingTodos}/>
            <TodoList list={todosList}/>
        </div>
        <ModalWindow isVisible={modal}
                     todoId={todoId}
                     onEditTodo={onEditTodo}
                     onCloseModal={onCloseModal}/>
    </div>
  )
}

export default App
