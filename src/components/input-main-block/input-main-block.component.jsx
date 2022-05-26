import { useState } from "react";

import "./input-main-block.styles.css";

const InputMainBlock = ({ addTask }) => {
	// стейт главного инпута
	const [userInput, setUserInput] = useState("");

	// записываем в стейт то, что вводит пользователь
	const handleChange = (e) => {
		setUserInput(e.currentTarget.value);
	};

	//добавляем туду
	const handleSubmit = () => {
		if (!userInput || userInput.match(/^[ ]+$/)) return;
		addTask(userInput);
		setUserInput("");
	};

	//добавляем туду по Enter
	const handleKeyPress = (e) => {
		if (!userInput || userInput.match(/^[ ]+$/)) return;

		if (e.key === "Enter") {
			handleSubmit(e);
		}
	};

	return (
		<div className='input-wrapper'>
			<input type='text' className='input-main' placeholder='What are we going to do?' value={userInput} onChange={handleChange} onKeyDown={handleKeyPress} />
			<button className='btn-add' onClick={handleSubmit}>
				<i className='fas fa-plus'></i>
			</button>
		</div>
	);
};

export default InputMainBlock;
