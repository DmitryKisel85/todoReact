import PropTypes from "prop-types";

import "./clear-block.styles.css";

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
		<div className='mb'>
			<button className='btn-clear-all btn-clear' onClick={handleClearAll}>
				Clear All
			</button>
			<button className='btn-clear-completed btn-clear' onClick={handleClearCompleted}>
				Clear completed
			</button>
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
