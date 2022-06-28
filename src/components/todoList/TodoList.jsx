import { useSelector } from "react-redux";

import { filteredTodosSelector } from "@store/todosSlice";

import TodoListItem from "@components/todoListItem/";

import "./todoList.scss";

const TodoList = () => {
	const filteredTodos = useSelector(filteredTodosSelector);

	const renderedTodos = filteredTodos.map(({ id }) => {
		return <TodoListItem key={id} id={id} />;
	});
	return <ul className='todos-wrapper'>{renderedTodos}</ul>;
};

export default TodoList;
