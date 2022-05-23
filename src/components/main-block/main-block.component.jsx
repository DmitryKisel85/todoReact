import { useState } from "react";

import InputMainBlock from "../input-main-block/input-main-block.component";
import TodosCounter from "../todos-counter/todos-counter.component";
import FilterBlock from "../filter-block/filter-block.component";
import ClearBlock from "../clear-block/clear-block.component";
import TodoElem from "../todo-elem/todo-elem.component";

import "./main-block.styles.css";

const MainBlock = () => {
	const [todos, setTodos] = useState([]);
	const [filter, setFilter] = useState("all");

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
		console.log(todos);
		setTodos([...todos.filter((todo) => todo.completed === false)]);
	};

	const toggleCompleted = (id) => {
		setTodos([...todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : { ...todo }))]);
	};

	const changeFilter = (filterNew) => {
		setFilter(filterNew);
	};

	const renderFilteredTodos = () => {
		// eslint-disable-next-line
		switch (filter) {
			case "all":
				return todos.map((todo) => {
					return <TodoElem todo={todo} key={todo.id} toggleCompleted={toggleCompleted} deleteTask={deleteTask} />;
				});
			case "active":
				const activeTodos = [...todos.filter((todo) => todo.completed === false)];
				return activeTodos.map((todo) => {
					return <TodoElem todo={todo} key={todo.id} toggleCompleted={toggleCompleted} deleteTask={deleteTask} />;
				});

			case "completed":
				const completedTodos = [...todos.filter((todo) => todo.completed === true)];
				return completedTodos.map((todo) => {
					return <TodoElem todo={todo} key={todo.id} toggleCompleted={toggleCompleted} deleteTask={deleteTask} />;
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
