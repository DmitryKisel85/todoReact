import "./clear-block.styles.css";

const ClearBlock = ({ clearAll, clearCompleted }) => {
	return (
		<div className='mb'>
			<button className='btn-clear-all btn-clear' onClick={clearAll}>
				Clear All
			</button>
			<button className='btn-clear-completed btn-clear' onClick={clearCompleted}>
				Clear completed
			</button>
		</div>
	);
};

export default ClearBlock;
