import { useState } from "react";

import BtnEdit from "../btn-edit/btn-edit.component";
import BtnCheck from "../btn-check/btn-check.component";
import BtnDelete from "../btn-delete/btn-delete.component";

import "./todo-elem.styles.css";

const TodoElem = ({ todo: { completed, id, description }, toggleCompleted, deleteTask, editTask }) => {
	const [readOnlyState, setReadOnlyState] = useState(true);

	const modifyEditing = (param) => {
		switch (param) {
			case true:
				setReadOnlyState(true);
				break;
			case false:
				setReadOnlyState(false);
				break;
			default:
				setReadOnlyState((prevState) => !prevState);
				break;
		}
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
				onDoubleClick={() => modifyEditing(false)}
				onChange={(e) => {
					editTask(e.target.value, id);
				}}
				onBlur={() => modifyEditing(true)}
			></textarea>
			{readOnlyState ? <BtnEdit modifyEditing={modifyEditing} /> : <BtnCheck modifyEditing={modifyEditing} />}
			<BtnDelete id={id} deleteTask={deleteTask} />
		</li>
	);
};

export default TodoElem;
