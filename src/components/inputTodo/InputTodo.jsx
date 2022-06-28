import { useRef } from "react";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
// генератор id
import { v4 as uuidv4 } from "uuid";

import { addTodo } from "@store/todosSlice";

import "./inputTodo.scss";

const InputTodo = () => {
	const dispatch = useDispatch();

	const inputRef = useRef();

	//добавляем туду
	const handleSubmit = (e) => {
		e.preventDefault();

		let userInput = inputRef.current.value;

		// проверка на пустую строку и пробелы
		if (!userInput || userInput.match(/^[ ]+$/)) return;

		const newTodo = {
			id: uuidv4(),
			description: userInput,
			completed: false,
		};

		dispatch(addTodo(newTodo));

		inputRef.current.value = "";
	};

	return (
		<form className='input-wrapper' onSubmit={handleSubmit}>
			<input type='text' className='input-main' placeholder='What are we going to do?' ref={inputRef} autoFocus />
			<motion.button whileTap={{ scale: 0.95 }} whileHover={{ cursor: "pointer", scale: 1.1, filter: "brightness(1.5)" }} className='btn-add' onClick={handleSubmit}>
				<i className='fas fa-plus'></i>
			</motion.button>
		</form>
	);
};

export default InputTodo;
