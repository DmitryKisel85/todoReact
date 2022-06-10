import PropTypes from "prop-types";

import "./todos-counter.css";

const TodosCounter = ({ todos }) => {
	return (
		<div className='todo-count mb mt'>
			Things left to do: <span className='todo-number'>{todos.length}</span>
		</div>
	);
};

TodosCounter.propTypes = {
	todos: PropTypes.array.isRequired,
};

export default TodosCounter;
