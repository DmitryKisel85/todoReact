import { useState, useEffect } from "react";

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

	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
		localStorage.setItem("filter", JSON.stringify(filter));
		addAutoResize();
	}, [todos, filter]);

	const addTask = (userInput) => {
		const newTodo = {
			id: Math.random().toString(36).substring(2, 9),
			description: userInput,
			completed: false,
		};
		setTodos([...todos, newTodo]);
	};

	const deleteTask = (id) => {
		setTodos([...todos.filter((todo) => todo.id !== id)]);
	};

	const clearAll = () => {
		setTodos([]);
	};

	const clearCompleted = () => {
		setTodos([...todos.filter((todo) => todo.completed === false)]);
	};

	const toggleCompleted = (id) => {
		setTodos([...todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : { ...todo }))]);
	};

	const changeFilter = (filterNew) => {
		setFilter(filterNew);
	};

	const editTask = (updatedTitle, id) => {
		setTodos([...todos.map((todo) => (todo.id === id ? { ...todo, description: updatedTitle } : { ...todo }))]);
	};

	const renderFilteredTodos = () => {
		// eslint-disable-next-line
		switch (filter) {
			case "all":
				return todos.map((todo) => {
					return <TodoElem todo={todo} key={todo.id} toggleCompleted={toggleCompleted} deleteTask={deleteTask} editTask={editTask} />;
				});
			case "active":
				const activeTodos = [...todos.filter((todo) => todo.completed === false)];
				return activeTodos.map((todo) => {
					return <TodoElem todo={todo} key={todo.id} toggleCompleted={toggleCompleted} deleteTask={deleteTask} editTask={editTask} />;
				});

			case "completed":
				const completedTodos = [...todos.filter((todo) => todo.completed === true)];
				return completedTodos.map((todo) => {
					return <TodoElem todo={todo} key={todo.id} toggleCompleted={toggleCompleted} deleteTask={deleteTask} editTask={editTask} />;
				});
		}
	};

	return (
		<main className='main'>
			<InputMainBlock addTask={addTask} />
			<ul className='todos-wrapper'>{renderFilteredTodos()}</ul>
			<TodosCounter todos={todos} />
			<FilterBlock changeFilter={changeFilter} filter={filter} />
			<ClearBlock clearAll={clearAll} clearCompleted={clearCompleted} />
		</main>
	);
};

export default MainBlock;
