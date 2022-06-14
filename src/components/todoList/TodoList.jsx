import React from "react";
import { useSelector } from "react-redux";
import TodoListItem from "../todoListItem/TodoListItem";

import { filteredTodosSelector } from "./todosSlice";

import "./todoList.css";

const TodoList = () => {
	const filteredTodos = useSelector(filteredTodosSelector);

	const renderedTodos = filteredTodos.map(({ id }) => {
		return (
			<TodoListItem
				key={id}
				id={id}
				// toggleCompleted={toggleCompleted}
				// deleteTask={deleteTask}
				// editTask={editTask}
			/>
		);
	});
	return <ul className='todos-wrapper'>{renderedTodos}</ul>;
};

export default TodoList;
