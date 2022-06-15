import { useState } from "react";
import { useDispatch } from "react-redux";

// генератор id
import { v4 as uuidv4 } from "uuid";

import { addTodo } from "../../store/todosSlice";

import "./inputTodo.css";

import { motion } from "framer-motion";

const InputTodo = () => {
	const dispatch = useDispatch();

	// стейт главного инпута
	const [userInput, setUserInput] = useState("");

	// записываем в стейт то, что вводит пользователь
	const handleChange = (e) => {
		setUserInput(e.currentTarget.value);
	};

	//добавляем туду
	const handleSubmit = (e) => {
		e.preventDefault();

		if (!userInput || userInput.match(/^[ ]+$/)) return;

		const newTodo = {
			id: uuidv4(),
			description: userInput,
			completed: false,
		};

		dispatch(addTodo(newTodo));
		setUserInput("");
	};

	return (
		<form className='input-wrapper' onSubmit={handleSubmit}>
			<input type='text' className='input-main' placeholder='What are we going to do?' value={userInput} onChange={handleChange} />
			<motion.button whileTap={{ scale: 0.95 }} whileHover={{ cursor: "pointer", scale: 1.1, filter: "brightness(1.5)" }} className='btn-add' onClick={handleSubmit}>
				<i className='fas fa-plus'></i>
			</motion.button>
		</form>
	);
};

export default InputTodo;
