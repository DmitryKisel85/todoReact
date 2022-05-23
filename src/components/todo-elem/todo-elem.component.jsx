import { useState } from "react";

import BtnEdit from "../btn-edit/btn-edit.component";
import BtnCheck from "../btn-check/btn-check.component";
import BtnDelete from "../btn-delete/btn-delete.component";

import "./todo-elem.styles.css";

const TodoElem = ({ todo: { completed, id, description }, toggleCompleted, deleteTask, editTask }) => {
	const [readOnlyState, setReadOnlyState] = useState(true);

	const enableEditing = () => {
		// setReadOnlyState((prevState) => !prevState);
		setReadOnlyState(false);
		console.log(readOnlyState);
	};

	const disableEditing = () => {
		setReadOnlyState(true);
	};

	const toggleEditing = () => {
		setReadOnlyState((prevState) => !prevState);
	};

	return (
		<li className={`todo-item ${completed ? "checked" : ""}`} key={id}>
			<input type='checkbox' id={`btn-complete-${id}`} className={`btn-complete ${completed ? "checked" : ""}`} onChange={() => toggleCompleted(id)} defaultChecked={completed ? true : false} />

			<label htmlFor={`btn-complete-${id}`}></label>
			<textarea
				id={`input-description-${id}`}
				className='description'
				data-autoresize
				rows='1'
				readOnly={readOnlyState}
				value={description}
				onDoubleClick={enableEditing}
				onChange={(e) => {
					editTask(e.target.value, id);
				}}
				onBlur={disableEditing}
			></textarea>
			{readOnlyState ? <BtnEdit toggleEditing={toggleEditing} /> : <BtnCheck toggleEditing={toggleEditing} />}
			<BtnDelete id={id} deleteTask={deleteTask} />
		</li>
	);
};

export default TodoElem;
