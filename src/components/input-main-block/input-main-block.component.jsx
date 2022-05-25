import { useState } from "react";

import "./input-main-block.styles.css";

const InputMainBlock = ({ addTask }) => {
	const [userInput, setUserInput] = useState("");

	const handleChange = (e) => {
		setUserInput(e.currentTarget.value);
	};
	const handleSubmit = () => {
		if (!userInput || userInput.match(/^[ ]+$/)) return;
		addTask(userInput);
		setUserInput("");
	};
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
