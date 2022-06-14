import PropTypes from "prop-types";

import BtnClearBlock from "../btnClearBlock/BtnClearBlock";
import "./clearBlock.css";

const ClearBlock = ({ clearAll, clearCompleted, setIsDeletingAll, setIsDeletingCompleted }) => {
	// удаление всех туду
	const handleClearAll = () => {
		clearAll();
		setIsDeletingAll(true);
	};

	// удаление завершенных туду
	const handleClearCompleted = () => {
		clearCompleted();
		setIsDeletingCompleted(true);
	};

	return (
		<div className='clear-block'>
			<BtnClearBlock handleClear={handleClearAll}>Clear All</BtnClearBlock>
			<BtnClearBlock handleClear={handleClearCompleted}>Clear Completed</BtnClearBlock>
		</div>
	);
};

ClearBlock.propTypes = {
	clearAll: PropTypes.func.isRequired,
	clearCompleted: PropTypes.func.isRequired,
	setIsDeletingAll: PropTypes.func.isRequired,
	setIsDeletingCompleted: PropTypes.func.isRequired,
};

export default ClearBlock;
