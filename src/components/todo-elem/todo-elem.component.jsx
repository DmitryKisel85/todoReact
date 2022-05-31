import { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";

import BtnEdit from "../btn-edit/btn-edit.component";
import BtnCheck from "../btn-check/btn-check.component";
import BtnDelete from "../btn-delete/btn-delete.component";

import "./todo-elem.styles.css";

const TodoElem = ({ todo: { completed, id, description }, toggleCompleted, deleteTask, editTask }) => {
	// Стейт для изменения аттрибута ReadOnly у каждого туду
	const [readOnlyState, setReadOnlyState] = useState(true);

	// Cтейт для состояния туду, после нажатия кнопки удалить
	// По этому стейту на туду навешивается класс 'deleting', который запускает анимацию удаления
	const [isDeleting, setIsDeleting] = useState(false);

	// Используем useRef и useEffect для установки фокуса на textarea при редактировании туду
	const inputRef = useRef(null);
	useEffect(() => {
		inputRef.current.focus();
	}, [readOnlyState]);

	// изменение стейта аттрибута ReadOnly для возможности\невозможности редактирования туду
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
		<li className={`todo-item ${completed ? "checked" : ""} ${isDeleting ? "deleting" : ""}`} key={id}>
			<input type='checkbox' id={`btn-complete-${id}`} className={`btn-complete ${completed ? "checked" : ""} `} onChange={() => toggleCompleted(id)} defaultChecked={completed ? true : false} />
			<label htmlFor={`btn-complete-${id}`}></label>
			<textarea
				className='description'
				data-autoresize
				rows='1'
				readOnly={readOnlyState}
				value={description}
				onDoubleClick={() => modifyEditing(false)}
				onChange={(e) => {
					editTask(e.target.value, id);
				}}
				ref={inputRef}
				onBlur={() => modifyEditing(true)}
			></textarea>
			{readOnlyState ? <BtnEdit modifyEditing={modifyEditing} /> : <BtnCheck modifyEditing={modifyEditing} />}
			<BtnDelete id={id} deleteTask={deleteTask} setIsDeleting={setIsDeleting} />
		</li>
	);
};

TodoElem.propTypes = {
	todo: PropTypes.object.isRequired,
	toggleCompleted: PropTypes.func.isRequired,
	deleteTask: PropTypes.func.isRequired,
	editTask: PropTypes.func.isRequired,
};

export default TodoElem;
