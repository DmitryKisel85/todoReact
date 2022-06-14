import { useState } from "react";

import InputTodo from "../inputTodo/InputTodo";
import TodosCounter from "../todosCounter/TodosCounter";
import FilterBlock from "../filterBlock/FilterBlock";
import ClearBlock from "../clearBlock/ClearBlock";
import TodoList from "../todoList/TodoList";

import "./mainBlock.css";

const MainBlock = () => {
	// два стейта нужные для добавления классов для контейнера туду (todos-wrapper) и последующей анимации удаления
	const [isDeletingAll, setIsDeletingAll] = useState(false);
	const [isDeletingCompleted, setIsDeletingCompleted] = useState(false);

	return (
		<main className='main'>
			<InputTodo />
			<TodoList />
			<TodosCounter />
			<FilterBlock />
			<ClearBlock />
		</main>
	);
};

export default MainBlock;
