import { useState, useEffect, useCallback } from "react";

import InputTodo from "../input-todo/Input-todo";
import TodosCounter from "../todosCounter/TodosCounter";
import FilterBlock from "../filter-block/Filter-block";
import ClearBlock from "../clear-block/Clear-block";
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

	useEffect(() => {
		todoFilter(filter);
	}, [todos, filter]);

	// удаление всех туду
	const clearAll = () => {
		setTimeout(() => {
			setTodos([]);
			setIsDeletingAll(false);
		}, 500);
	};

	// удаление завершенных туду
	const clearCompleted = () => {
		setTimeout(() => {
			setTodos([...todos.filter((todo) => todo.completed === false)]);
			setIsDeletingCompleted(false);
		}, 500);
	};

	// Изменение стейта фильтра и изменение стейта отфильтрованных туду, которые потом идут на рендер
	const changeFilter = (filterNew) => {
		setFilter(filterNew);
		todoFilter(filterNew);
	};
	const todoFilter = useCallback(
		(filter) => {
			// eslint-disable-next-line
			switch (filter) {
				case "all":
					setFilteredTodos(todos);
					break;
				case "active":
					setFilteredTodos([...todos].filter((todo) => todo.completed === false));
					break;
				case "completed":
					setFilteredTodos([...todos].filter((todo) => todo.completed === true));
					break;
			}
		},
		[todos]
	);

	return (
		<main className='main'>
			<InputTodo />
			<TodoList />
			<TodosCounter />
			<FilterBlock changeFilter={changeFilter} filter={filter} />
			<ClearBlock clearAll={clearAll} clearCompleted={clearCompleted} setIsDeletingAll={setIsDeletingAll} setIsDeletingCompleted={setIsDeletingCompleted} />
		</main>
	);
};

export default MainBlock;
