import { useState, useEffect } from "react";

import { v4 as uuidv4 } from "uuid";

import InputMainBlock from "../input-main-block/input-main-block.component";
import TodosCounter from "../todos-counter/todos-counter.component";
import FilterBlock from "../filter-block/filter-block.component";
import ClearBlock from "../clear-block/clear-block.component";
import TodoElem from "../todo-elem/todo-elem.component";

import addAutoResize from "../../addAutoResize";

import "./main-block.styles.css";

const MainBlock = () => {
	const [todos, setTodos] = useState(() => {
		const initialValue = JSON.parse(localStorage.getItem("todos"));
		return initialValue || [];
	});

	const [filter, setFilter] = useState(() => {
		const initialValue = JSON.parse(localStorage.getItem("filter"));
		return initialValue || "all";
	});

	const [filteredTodos, setFilteredTodos] = useState(todos);
	const [isDeletingAll, setIsDeletingAll] = useState(false);
	const [isDeletingCompleted, setIsDeletingCompleted] = useState(false);

	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
		localStorage.setItem("filter", JSON.stringify(filter));
		addAutoResize();
		todoFilter(filter);
		// eslint-disable-next-line
	}, [todos, filter]);

	const addTask = (userInput) => {
		const newTodo = {
			id: uuidv4(),
			description: userInput,
			completed: false,
		};
		setTodos([...todos, newTodo]);
	};

	const deleteTask = (id) => {
		setTimeout(() => {
			setTodos([...todos.filter((todo) => todo.id !== id)]);
		}, 500);

		// setTodos([...todos.filter((todo) => todo.id !== id)]);
	};

	const clearAll = () => {
		setTimeout(() => {
			setTodos([]);
			setIsDeletingAll(false);
		}, 500);

		// setTodos([]);
	};

	const clearCompleted = () => {
		setTimeout(() => {
			setTodos([...todos.filter((todo) => todo.completed === false)]);
			setIsDeletingCompleted(false);
		}, 500);
		// setTodos([...todos.filter((todo) => todo.completed === false)]);
	};

	const toggleCompleted = (id) => {
		setTodos([...todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : { ...todo }))]);
	};

	const changeFilter = (filterNew) => {
		setFilter(filterNew);
		todoFilter(filterNew);
	};

	const editTask = (updatedTitle, id) => {
		setTodos([...todos.map((todo) => (todo.id === id ? { ...todo, description: updatedTitle } : { ...todo }))]);
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
