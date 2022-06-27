import { useDispatch } from "react-redux";
import { clearAllTodos, clearCompletedTodos } from "@store/todosSlice";

import Button from "@components/button";

import "./clearBlock.scss";

const ClearBlock = () => {
	const dispatch = useDispatch();

	// удаление всех туду
	const handleClearAllTodos = () => {
		dispatch(clearAllTodos());
	};

	// удаление завершенных туду
	const handleClearCompletedTodos = () => {
		dispatch(clearCompletedTodos());
	};

	return (
		<div className='clear-block'>
			<Button className='btn_generalStyle btn-clear' onClick={handleClearAllTodos}>
				Clear All
			</Button>
			<Button className='btn_generalStyle btn-clear' onClick={handleClearCompletedTodos}>
				Clear Completed
			</Button>
		</div>
	);
};

export default ClearBlock;
