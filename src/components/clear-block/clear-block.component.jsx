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

export default ClearBlock;
