import { useState } from "react";

import "./btn-todo-elem.styles.css";

const BtnTodoElem = () => {
	const [btnState, setBtnState] = useState(true);

	const changeState = () => {
		console.log(btnState);
		setBtnState((prevState) => !prevState);
	};

	const Icon = (icon) => {
		<i className={icon}></i>;
	};

	return (
		<>{btnState ? <Icon icon={"far fa-edit"}></Icon> : <Icon icon={"fas fa-check"}></Icon>}</>
		// <button className='btn-todo-elem' onClick={() => changeState()}>

		// </button>
	);
};

export default BtnTodoElem;
