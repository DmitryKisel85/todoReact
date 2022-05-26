import { useState, useEffect } from "react";

// генератор id
import { v4 as uuidv4 } from "uuid";

import InputMainBlock from "../input-main-block/input-main-block.component";
import TodosCounter from "../todos-counter/todos-counter.component";
import FilterBlock from "../filter-block/filter-block.component";
import ClearBlock from "../clear-block/clear-block.component";
import TodoElem from "../todo-elem/todo-elem.component";

// добавление функции авторесайза туду, в зависимости от кол-ва строк
import addAutoResize from "../../addAutoResize";

import "./main-block.styles.css";

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
	const [filteredTodos, setFilteredTodos] = useState(todos);

	// два стейта нужные для добавления классов для контейнера туду (todos-wrapper) и последующей анимации удаления
	const [isDeletingAll, setIsDeletingAll] = useState(false);
	const [isDeletingCompleted, setIsDeletingCompleted] = useState(false);

	// загрузка стейта туду и текущего фильтра в localStorage
	// применение авторесайза к отрендеренным туду
	// перерендеринг туду в зависимости от изменения фильтра
	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
		localStorage.setItem("filter", JSON.stringify(filter));
		addAutoResize();
		todoFilter(filter);
		// eslint-disable-next-line
	}, [todos, filter]);

	// добавление туду
	const addTask = (userInput) => {
		const newTodo = {
			id: uuidv4(),
			description: userInput,
			completed: false,
		};
		setTodos([...todos, newTodo]);
	};

	// удаление туду
	const deleteTask = (id) => {
		setTimeout(() => {
			setTodos([...todos.filter((todo) => todo.id !== id)]);
		}, 500);
	};

	// удаление всех туду
	const clearAll = () => {
		setTimeout(() => {
			setTodos([]);
			setIsDeletingAll(false);
		}, 500);
	};

	const editTask = (updatedTitle, id) => {
		setTodos([...todos.map((todo) => (todo.id === id ? { ...todo, description: updatedTitle } : { ...todo }))]);
	};

	// удаление завершенных туду
	const clearCompleted = () => {
		setTimeout(() => {
			setTodos([...todos.filter((todo) => todo.completed === false)]);
			setIsDeletingCompleted(false);
		}, 500);
	};

	// изменение статуса туду (completed: true/false)
	const toggleCompleted = (id) => {
		setTodos([...todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : { ...todo }))]);
	};

	// Изменение стейта фильтра и изменение стейта отфильтрованных туду, которые потом идут на рендер
	const changeFilter = (filterNew) => {
		setFilter(filterNew);
		todoFilter(filterNew);
	};
	const todoFilter = (filter) => {
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
	};

	return (
		<main className='main'>
			<InputMainBlock addTask={addTask} />

			<ul className={`todos-wrapper ${isDeletingAll ? "deleting" : ""} ${isDeletingCompleted ? "deleting-completed" : ""}`}>
				{filteredTodos.map((todo) => {
					return <TodoElem todo={todo} key={todo.id} toggleCompleted={toggleCompleted} deleteTask={deleteTask} editTask={editTask} />;
				})}
			</ul>

			<TodosCounter todos={todos} />
			<FilterBlock changeFilter={changeFilter} filter={filter} />
			<ClearBlock clearAll={clearAll} clearCompleted={clearCompleted} setIsDeletingAll={setIsDeletingAll} setIsDeletingCompleted={setIsDeletingCompleted} />
		</main>
	);
};

export default MainBlock;
