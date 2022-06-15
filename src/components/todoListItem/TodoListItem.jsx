import PropTypes from "prop-types";
import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";

import { toggleCompleted, editTodo, deleteTodo } from "@store/todosSlice";

import BtnTodoListItem from "@components/btnTodoListItem";

import "./todoListItem.css";

// ANIMATIONS
const variants = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		transition: {
			duration: 0.2,
		},
	},
};

const TodoListItem = ({ id }) => {
	const dispatch = useDispatch();

	const [todo] = useSelector((state) => {
		return state.todos.todos.filter((todo) => todo.id === id);
	});
	const { completed, description } = todo;

	// Стейт для изменения аттрибута ReadOnly у каждого туду
	const [readOnlyState, setReadOnlyState] = useState(true);

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

	const handleChange = () => {
		dispatch(toggleCompleted(id));
	};

	const handleEdit = (e) => {
		const updatedValue = e.currentTarget.value;
		dispatch(editTodo({ id: id, updatedValue: updatedValue }));
	};

	const handleDelete = () => {
		dispatch(deleteTodo(id));
	};

	return (
		<motion.li className={`todo-item ${completed ? "checked" : ""}`} key={id} initial='hidden' animate='visible' exit='hidden' variants={variants} layoutId={id}>
			<input type='checkbox' id={`btn-complete-${id}`} className={`btn-complete ${completed ? "checked" : ""} `} onChange={handleChange} defaultChecked={completed ? true : false} />
			<label htmlFor={`btn-complete-${id}`}></label>
			<textarea
				className='description'
				data-autoresize
				rows='1'
				readOnly={readOnlyState}
				value={description}
				onDoubleClick={() => modifyEditing(false)}
				onChange={handleEdit}
				ref={inputRef}
				onBlur={() => modifyEditing(true)}
			></textarea>

			{/* {readOnlyState === true ? <BtnTodoListItem handleOperation={modifyEditing} iconClass='far fa-edit' /> : <BtnTodoListItem handleOperation={modifyEditing} iconClass='fas fa-check' />} */}

			{readOnlyState === true ? <BtnTodoListItem handleOperation={modifyEditing} iconClass='far fa-edit' /> : null}
			{readOnlyState === false ? <BtnTodoListItem handleOperation={modifyEditing} iconClass='fas fa-check' /> : null}

			<BtnTodoListItem handleOperation={handleDelete} iconClass='fas fa-times' />
		</motion.li>
	);
};

TodoListItem.propTypes = {
	id: PropTypes.string.isRequired,
};

export default TodoListItem;
