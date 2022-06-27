import PropTypes from "prop-types";
import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";

import { toggleCompleted, editTodo, deleteTodo } from "@store/todosSlice";

import Button from "@components/button";

import "./todoListItem.scss";

// объект с настройками анимации Framer Motion
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
	const { description, completed } = todo;

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

	// выполнение туду
	const handleChange = () => {
		dispatch(toggleCompleted(id));
	};

	// редактирование туду
	const handleEdit = (e) => {
		let updatedValue = e.currentTarget.value;

		dispatch(editTodo({ id: id, updatedValue: updatedValue }));
	};

	// удаление туду
	const handleDelete = () => {
		dispatch(deleteTodo(id));
	};

	return (
		<motion.li className={`todo-item ${completed && "checked"}`} key={id} initial='hidden' animate='visible' exit='hidden' variants={variants} layoutId={id}>
			<input type='checkbox' id={`btn-complete-${id}`} className={`btn-complete ${completed && "checked"}`} onChange={handleChange} defaultChecked={completed} />
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

			{readOnlyState ? (
				<Button className='btn-todolistitem' key='edit' onClick={modifyEditing}>
					<i className='far fa-edit'></i>
				</Button>
			) : (
				<Button className='btn-todolistitem' key='check' onClick={modifyEditing}>
					<i className='fas fa-check'></i>
				</Button>
			)}

			<Button className='btn-todolistitem' onClick={handleDelete}>
				<i className='fas fa-times'></i>
			</Button>
		</motion.li>
	);
};

TodoListItem.propTypes = {
	id: PropTypes.string.isRequired,
};

export default TodoListItem;
