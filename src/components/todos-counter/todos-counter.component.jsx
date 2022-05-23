import "./todos-counter.styles.css";

const TodosCounter = ({ todos }) => {
	return (
		<div className='todo-count mb mt'>
			Things left to do: <span className='todo-number'>{todos.length}</span>
		</div>
	);
};

export default TodosCounter;
