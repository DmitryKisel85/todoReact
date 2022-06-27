import PropTypes from "prop-types";

import "./BtnTodoListItem.scss";

const BtnTodoListItem = ({ handleOperation, iconClass }) => {
	return (
		<button key={iconClass} className='btn-todolistitem' onClick={handleOperation}>
			<i className={iconClass}></i>
		</button>
	);
};

BtnTodoListItem.propTypes = {
	handleOperation: PropTypes.func.isRequired,
	iconClass: PropTypes.string,
};

export default BtnTodoListItem;
