import { useState, useEffect, useCallback } from "react";

import InputTodo from "../inputTodo/InputTodo";
import TodosCounter from "../todosCounter/TodosCounter";
import FilterBlock from "../filterBlock/FilterBlock";
import ClearBlock from "../clearBlock/ClearBlock";
import TodoList from "../todoList/TodoList";

// добавление функции авторесайза туду, в зависимости от кол-ва строк
import addAutoResize from "../../services/addAutoResize";

import "./mainBlock.css";

const MainBlock = () => {
	// главный стейт с туду элементами и загрузка из localStorage
	const [todos, setTodos] = useState(() => {
		const initialValue = JSON.parse(localStorage.getItem("todos"));
		return initialValue || [];
	});

	// стейт с выбранным фильтром и загрузка из localStorage
	const [filter, setFilter] = useState(() => {
		const initialValue = JSON.parse(localStorage.getItem("filter"));
		return initialValue || "all";
	});

	// стейт, где хранятся отфильтрованные туду
	// const [filteredTodos, setFilteredTodos] = useState(todos);
	const [filteredTodos, setFilteredTodos] = useState(todos);

	// два стейта нужные для добавления классов для контейнера туду (todos-wrapper) и последующей анимации удаления
	const [isDeletingAll, setIsDeletingAll] = useState(false);
	const [isDeletingCompleted, setIsDeletingCompleted] = useState(false);

	// загрузка стейта туду и текущего фильтра в localStorage
	// применение авторесайза к отрендеренным туду
	// перерендеринг туду в зависимости от изменения фильтра
	// useEffect(() => {
	// 	localStorage.setItem("todos", JSON.stringify(todos));
	// 	localStorage.setItem("filter", JSON.stringify(filter));
	// 	addAutoResize();
	// 	todoFilter(filter);
	// }, [todos, filter]);

	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
		addAutoResize();
	}, [todos]);

	useEffect(() => {
		localStorage.setItem("filter", JSON.stringify(filter));
	}, [filter]);

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
