import { useEffect } from "react";
import { useSelector } from "react-redux";
import TodoListItem from "../todoListItem/TodoListItem";

import { filteredTodosSelector } from "../../store/todosSlice";

// добавление функции авторесайза туду, в зависимости от кол-ва строк
import addAutoResize from "../../services/addAutoResize";

import "./todoList.css";

const TodoList = () => {
	const filteredTodos = useSelector(filteredTodosSelector);

	useEffect(() => {
		addAutoResize();
	}, [filteredTodos]);

	const renderedTodos = filteredTodos.map(({ id }) => {
		return <TodoListItem key={id} id={id} />;
	});
	return <ul className='todos-wrapper'>{renderedTodos}</ul>;
};

export default TodoList;
