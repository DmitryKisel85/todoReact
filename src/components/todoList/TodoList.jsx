import { useEffect } from "react";
import { useSelector } from "react-redux";
// добавление функции авторесайза туду, в зависимости от кол-ва строк
import addAutoResize from "@services/addAutoResize";

import { filteredTodosSelector } from "@store/todosSlice";

import TodoListItem from "@components/todoListItem/";

import "./todoList.scss";

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
