import PropTypes from "prop-types";

import "./BtnTodoListItem.css";

const BtnTodoListItem = ({ handleOperation, iconClass }) => {
	return (
		<button className='btn-todolistitem' onClick={handleOperation}>
			<i className={iconClass}></i>
		</button>
	);
};

BtnTodoListItem.propTypes = {
	handleOperation: PropTypes.func.isRequired,
	iconClass: PropTypes.string,
};

export default BtnTodoListItem;
