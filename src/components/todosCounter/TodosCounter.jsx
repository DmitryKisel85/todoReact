import { useSelector } from "react-redux";

import "./todosCounter.scss";

const TodosCounter = () => {
	const todos = useSelector((state) => state.todos.todos);
	const todosLeftToDo = todos.filter((todo) => !todo.completed).length;

	return (
		<div className='todo-count'>
			Things left to do: <span className='todo-number'>{todosLeftToDo}</span>
		</div>
	);
};

export default TodosCounter;
