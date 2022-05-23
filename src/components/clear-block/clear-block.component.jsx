import "./clear-block.styles.css";

const ClearBlock = ({ clearAll, clearCompleted }) => {
	return (
		<div className='footer-btns mb'>
			<button id='clear-all' className='btn-clear-all btn-footer' onClick={clearAll}>
				Clear All
			</button>
			<button id='clear-completed' className='btn-clear-completed btn-footer' onClick={clearCompleted}>
				Clear completed
			</button>
		</div>
	);
};

export default ClearBlock;
