import { useState } from "react";

import "./todo-elem.styles.css";

const TodoElem = ({ todo: { completed, id, description }, toggleCompleted, deleteTask, editTask }) => {
	const [readOnlyState, setReadOnlyState] = useState(true);

	const handleEdit = (e) => {
		setReadOnlyState(!readOnlyState);
	};

	return (
		<li className={`todo-item ${completed ? "checked" : ""}`} key={id}>
			<input type='checkbox' id={`btn-complete-${id}`} className={`btn-complete ${completed ? "checked" : ""}`} onChange={() => toggleCompleted(id)} defaultChecked={completed ? true : false} />

			<label htmlFor={`btn-complete-${id}`}></label>
			<textarea
				id='input-description'
				className='description'
				data-autoresize
				rows='1'
				readOnly={readOnlyState}
				value={description}
				onDoubleClick={handleEdit}
				onChange={(e) => {
					editTask(e.target.value, id);
				}}
			></textarea>
			<button className='btn-edit' id='btn-edit' data-state='closed' onClick={handleEdit}>
				<i className='far fa-edit'></i>
			</button>
			<button className='btn-delete' id='btn-delete' onClick={() => deleteTask(id)}>
				<i className='fas fa-times'></i>
			</button>
		</li>
	);
};

export default TodoElem;
