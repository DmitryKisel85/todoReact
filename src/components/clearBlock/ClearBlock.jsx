import { useDispatch } from "react-redux";
import { clearAllTodos, clearCompletedTodos } from "@store/todosSlice";

import BtnClearBlock from "@components/btnClearBlock/";

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
			<BtnClearBlock handleClear={handleClearAllTodos}>Clear All</BtnClearBlock>
			<BtnClearBlock handleClear={handleClearCompletedTodos}>Clear Completed</BtnClearBlock>
		</div>
	);
};

export default ClearBlock;
