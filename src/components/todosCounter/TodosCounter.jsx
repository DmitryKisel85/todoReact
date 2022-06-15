import { useSelector } from "react-redux";

import "./todosCounter.css";

const TodosCounter = () => {
	const todosLength = useSelector((state) => state.todos.todos.length);

	return (
		<div className='todo-count'>
			Things left to do: <span className='todo-number'>{todosLength}</span>
		</div>
	);
};

export default TodosCounter;
